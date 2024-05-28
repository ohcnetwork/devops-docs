# AWS Cost

### Care
- The AWS resources and their cost to set up a care deployment to manage 20/day (ICU patients)

    | Service Name                         | Monthly Cost (INR) | Region               |
    |--------------------------------------|--------------------|----------------------|
    | Amazon EKS x2                        | ₹12185.42          | Asia Pacific (Mumbai)|
    | Amazon RDS for PostgreSQL x2         | ₹30894.11          | Asia Pacific (Mumbai)|
    | Amazon Virtual Private Cloud (VPC)   | ₹3518.06           | Asia Pacific (Mumbai)|
    | Amazon Simple Storage Service (S3)   | ₹62.76             | Asia Pacific (Mumbai)|
    | Amazon EC2 (t4g.large) x2            | ₹5464.93           | Asia Pacific (Mumbai)|

- The AWS Resources and their cost to set up a care-develop deployment
    | Service Name                         | Monthly Cost (INR) | Region               |
    |--------------------------------------|--------------------|----------------------|
    | Amazon ECS                           | ₹6955.49           | Asia Pacific (Mumbai)|
    | Amazon RDS for PostgreSQL x2         | ₹5222.49           | Asia Pacific (Mumbai)|
    | Amazon Virtual Private Cloud (VPC)   | ₹2572.72           | Asia Pacific (Mumbai)|
    | Amazon Simple Storage Service (S3)   | ₹62.76             | Asia Pacific (Mumbai)|
    | Amazon EC2(t3.medium)                | ₹1254.46           | Asia Pacific (Mumbai)|

    The frontend for care-develop is deployed to Vercel.

### Ayushma
- The AWS Resources and their cost to set up an Ayushma production deployment

    | Service Name                         | Monthly Cost (INR) | Region               |
    |--------------------------------------|--------------------|----------------------|
    | Amazon EC2 (t3.medium) x2            | ₹1254.46           | Asia Pacific (Mumbai)|
    | Amazon Virtual Private Cloud (VPC)   | ₹835.51            | Asia Pacific (Mumbai)|
    
    The Ayushma_fe can be deployed here itself but the fe deployments are deployed to vercel 