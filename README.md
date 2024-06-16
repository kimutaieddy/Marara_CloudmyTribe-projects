# Building an Online Resume with AWS

Welcome! we'll walk through the process of creating an online resume using AWS services. This project will demonstrate how to host a static website on S3, configure a custom domain with Route 53, and secure it with HTTPS using AWS Certificate Manager and CloudFront.
#Architecture Diagram 
![diagram-export-6-16-2024-11_39_01-AM](https://github.com/kimutaieddy/Marara_CloudmyTribe-projects/assets/131693884/60b27381-e82e-468b-85b4-c12867e8e342)

## Overview

Building an online resume involves several steps, each utilizing different AWS services:

1. **Part 1: Setting Up a Static Website on S3**
   - Create HTML, CSS, and JavaScript files for the resume.
   - Upload these files to an S3 bucket.
   - Configure the bucket for static website hosting.

2. **Part 2: Setting Up a Custom Domain with Route 53**
   - Register a domain name or use an existing one with Route 53.
   - Create a hosted zone and configure records to point to the S3 website.

3. **Part 3: Securing the Website with HTTPS Using CloudFront**
   - Request a public SSL/TLS certificate from AWS Certificate Manager.
   - Create a CloudFront distribution and associate the SSL certificate.
   - Update Route 53 records to point to the CloudFront distribution.

## Prerequisites

Before you begin, ensure you have:
- An AWS account set up.
- Basic familiarity with HTML, CSS, and JavaScript.
- Optionally, a domain name registered with AWS Route 53 or another registrar.

## Costs

The cost of this project varies:
- S3 hosting and Route 53 charges are minimal.
- AWS Certificate Manager offers free SSL certificates.
- CloudFront charges depend on usage but are generally low for personal sites.

Always monitor your AWS costs and set up a budget alarm to avoid unexpected charges.

## Tutorial Video

If you prefer visual instructions, watch the full tutorial video [here](https://www.youtube.com/watch?v=yourvideolink).

## Step-by-Step Guide

### Part 1: Setting Up a Static Website on S3

1. **Create Code Files**:
   - Write your resume content in HTML, CSS, and JavaScript.
   - Alternatively, use AI tools like ChatGPT for assistance.
   - Ensure your main HTML file is named `index.html`.

2. **Upload to S3**:
   - Navigate to AWS S3 console.
   - Create a new bucket with a name matching your domain (e.g., `yourdomain.com`).
   - Enable static website hosting and configure it to use `index.html` as the index document.

3. **Configure Bucket Permissions**:
   - Add a bucket policy allowing public read access to your files.
   - Example policy can be found in the video description or AWS documentation.

4. **Test Your Website**:
   - Access your S3 bucket's website endpoint to verify everything works.

### Part 2: Setting Up a Custom Domain with Route 53

1. **Register or Use Existing Domain**:
   - If using Route 53, register a new domain or transfer an existing one.
   - Alternatively, configure DNS settings with another registrar.

2. **Create Hosted Zone in Route 53**:
   - Set up a new hosted zone for your domain in Route 53.
   - Add an `A` record pointing to your S3 bucket's website endpoint.

3. **Verify Domain Configuration**:
   - Check DNS propagation using Route 53's console.
   - Ensure your domain resolves to your S3 website correctly.

### Part 3: Securing the Website with HTTPS Using CloudFront

1. **Request SSL Certificate in ACM**:
   - Navigate to AWS Certificate Manager (ACM).
   - Request a public SSL/TLS certificate for your domain (e.g., `yourdomain.com`).

2. **Create CloudFront Distribution**:
   - In CloudFront, create a new distribution.
   - Set the S3 bucket's website endpoint as the origin.
   - Configure HTTPS settings and select the SSL certificate from ACM.

3. **Update Route 53 Records**:
   - Update the `A` record created earlier to point to your CloudFront distribution.

4. **Test HTTPS**:
   - Access your website using your custom domain (e.g., `https://yourdomain.com`).
   - Ensure the connection is secure (padlock icon in the browser).

## Cleanup

After completing the project, remember to:
- Delete the CloudFront distribution.
- Delete the ACM certificate (only after deleting CloudFront).
- Empty and delete the S3 bucket.

## Conclusion

By following these steps, you'll have a fully functional online resume hosted on AWS, demonstrating your skills with web technologies and cloud services. This project is excellent for showcasing on your resume or portfolio.
