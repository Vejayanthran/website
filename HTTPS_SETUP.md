# HTTPS Setup for Custom Domain

## Current Issue

The SSL certificate is currently for `*.github.io` (GitHub's default certificate), not for `vejayanthran.com`. GitHub needs to issue a new SSL certificate for your custom domain.

## Solution Steps

### 1. Verify CNAME File is Deployed

The `public/CNAME` file has been created with `vejayanthran.com`. This file needs to be:
- ✅ Present in the `public/` folder (done)
- ✅ Deployed to GitHub Pages (check after next deployment)
- ✅ Accessible at `http://vejayanthran.com/CNAME`

### 2. Configure Custom Domain in GitHub

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `vejayanthran.com`
4. Check the box for **Enforce HTTPS** (this will be grayed out until SSL is ready)
5. Click **Save**

### 3. Wait for SSL Certificate

GitHub will automatically:
- Detect the CNAME file
- Verify DNS configuration
- Issue an SSL certificate for `vejayanthran.com`

**This process can take up to 24 hours** after the domain is configured in GitHub settings.

### 4. Verify DNS Configuration

Your DNS is correctly configured:
- ✅ A records point to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- ✅ www.vejayanthran.com CNAME points to vejayanthran.com

### 5. Check SSL Status

You can check if the SSL certificate has been issued by:

```bash
# Check certificate details
openssl s_client -connect vejayanthran.com:443 -servername vejayanthran.com < /dev/null 2>&1 | grep "subject="

# Should show: subject=CN = vejayanthran.com (when ready)
```

Currently shows: `subject=CN = *.github.io` (not ready yet)

## Troubleshooting

### If HTTPS still doesn't work after 24 hours:

1. **Verify CNAME file is deployed:**
   ```bash
   curl http://vejayanthran.com/CNAME
   # Should return: vejayanthran.com
   ```

2. **Check GitHub Pages settings:**
   - Make sure custom domain is set to `vejayanthran.com` (not `www.vejayanthran.com`)
   - Remove and re-add the domain if needed
   - Wait a few minutes after saving

3. **Clear DNS cache:**
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```

4. **Check GitHub Pages status:**
   - In repository Settings → Pages
   - Look for any error messages or warnings
   - Check if "Enforce HTTPS" checkbox becomes available

### Common Issues:

- **CNAME file not deployed:** Make sure it's in `public/CNAME` and the site has been rebuilt
- **DNS not propagated:** Can take up to 48 hours for full propagation
- **GitHub hasn't issued certificate yet:** Can take 24-48 hours after domain configuration

## Current Status

- ✅ DNS configured correctly
- ✅ CNAME file created
- ⏳ Waiting for GitHub to issue SSL certificate
- ⏳ HTTPS will work automatically once certificate is issued
