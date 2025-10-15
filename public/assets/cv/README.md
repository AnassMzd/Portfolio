# CV File Storage Instructions

## 📁 File Location
Place your CV file in this directory: `public/assets/cv/`

## 📄 File Requirements

### Recommended Format
- **Format**: PDF (Portable Document Format)
- **File Name**: `Anass_El_Mazdougui_CV.pdf`
- **Max Size**: 5MB (recommended for fast loading)

### Why PDF?
- ✅ Universal compatibility across all devices and browsers
- ✅ Preserves formatting and layout
- ✅ Professional standard for CVs/resumes
- ✅ Cannot be easily edited (maintains document integrity)
- ✅ Smaller file size compared to Word documents

## 📝 File Naming Convention

**Current Expected Name**: `Anass_El_Mazdougui_CV.pdf`

If you want to use a different name, update the file path in:
- `src/components/CVDownload.jsx` (line 16)

```javascript
link.href = '/assets/cv/YOUR_NEW_FILENAME.pdf'
link.download = 'YOUR_NEW_FILENAME.pdf'
```

## 🔒 Security Best Practices

1. **Remove Sensitive Information**: 
   - Personal ID numbers
   - Full home address (city/region is sufficient)
   - Passport/driver's license numbers

2. **Keep Updated**: 
   - Update your CV regularly
   - Version your CV files if needed (e.g., `CV_v2.pdf`)

3. **File Size Optimization**:
   - Compress images if included
   - Use PDF optimization tools
   - Keep file under 2-3MB for best performance

## 📋 CV Content Checklist

Ensure your CV includes:
- ✅ Contact Information (email, phone, LinkedIn)
- ✅ Professional Summary
- ✅ Education (INPT, degrees, dates)
- ✅ Work Experience & Internships
- ✅ Technical Skills (categorized)
- ✅ Certifications (with links if possible)
- ✅ Projects (with descriptions)
- ✅ Languages

## 🎨 CV Design Tips for Cybersecurity

- Use professional fonts (Arial, Calibri, Helvetica)
- Include relevant keywords for ATS (Applicant Tracking Systems)
- Use bullet points for easy scanning
- Keep it to 1-2 pages maximum
- Use consistent formatting throughout
- Consider adding a QR code linking to your portfolio

## 🚀 After Adding Your CV

1. Place your PDF file in this directory
2. Verify the filename matches: `Anass_El_Mazdougui_CV.pdf`
3. Test the download button on your website
4. Check that the file downloads correctly
5. Verify the file opens properly in different PDF readers

## 📱 Testing Checklist

- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)
- [ ] File downloads correctly
- [ ] File opens without errors
- [ ] File size is reasonable (<5MB)
- [ ] Content is up-to-date

## 🔄 Updating Your CV

When you update your CV:
1. Replace the old PDF file with the new one
2. Keep the same filename OR update the code
3. Clear browser cache if needed
4. Test the download again

---

**Note**: This directory is part of the `public` folder, which means files here are directly accessible via URL at `/assets/cv/filename.pdf`
