export const portfolio = {
  name: "Yogananth R",
  title: "Deloitte | Cloud Engineer",
  experience: "2.5+ Years",
  location: "Hosur, Tamil Nadu, India",

  intro:
    "Cloud Engineer at Deloitte with 2.5+ years of experience in AWS and GCP, building cloud automation, infrastructure tooling, monitoring solutions, and Python-based DevOps utilities.",

  email: "yogananthr22@gmail.com",

  social: {
    github: "https://github.com/Yogananth-r",
    linkedin: "https://linkedin.com/in/yogananth-rengasamy-5a8393193/",
  },

  resume: "/Yogananth_R_Resume_Cloud_Engineer.pdf",
};

export const skills = {
  cloud: [
    "AWS",
    "GCP",
    "EC2",
    "Lambda",
    "RDS",
    "CloudWatch",
    "IAM",
    "Compute Engine",
    "Filestore",
    "EventBridge",
  ],

  automation: [
    "Python",
    "Bash",
    "PowerShell",
    "FastAPI",
    "Git",
    "GitHub Actions",
    "Terraform",
  ],

  monitoring: [
    "Dynatrace",
    "CloudWatch",
    "GCP Monitoring",
    "Grafana",
    "Prometheus",
  ],

  systems: [
    "Linux",
    "RHEL",
    "Debian",
    "SLES",
    "Windows Server",
  ],
};

export const experience = [
  {
    company: "Cloud Engineering",
    role: "Cloud Engineer",
    period: "2023 — Present",
    summary:
      "Managing AWS and GCP infrastructure, automation, monitoring, patching, and operational tooling.",
  },
];

export const projects = [
  {
    title: "AWS Cloud Inventory",
    category: "Infrastructure Reporting CLI",
    description:
      "A lightweight Python CLI tool that runs directly inside AWS CloudShell to collect AWS infrastructure inventory and export it into a professionally formatted Excel workbook.",
    tech: ["Python","CloudShell", "Boto3"],
    github: "https://github.com/Yogananth-r/aws-cloud-inventory",
    featured: true,
  },
  {
    title: "AWS ALB Listener Rule Optimizer",
    category: "Infrastructure Analysis CLI",
    description:
      "Analyzes ALB listener rules, detects duplicate priorities, overlapping host/path rules, and optimization opportunities.",
    tech: ["Python", "ELBv2", "Boto3"],
    github: "https://github.com/Yogananth-r/aws-alb-rule-optimizer",
    featured: false,
  },
  {
    title: "AWS SG Rule Optimizer",
    category: "infrastructure Analysis CLI",
    description:
      "A Python CLI tool for AWS CloudShell that analyzes and optimizes AWS Security Group CIDR rules by merging adjacent IPv4 CIDR blocks into the smallest equivalent network ranges.",
    tech: ["Python", "EC2", "Security Groups"],
    github: "https://github.com/Yogananth-r/aws-sg-rule-optimizer",
    featured: false,
  },
  {
    title: "AWS Unused Resources Finder",
    category: "infrastructure Analysis CLI",
    description:
      "A read-only AWS CLI tool that scans an AWS account for potentially unused resources and generates an Excel report. It checks EC2, EBS, Elastic IPs, AMIs, RDS, Load Balancers, EFS, and S3. The tool only reads AWS resources and never modifies or deletes them.",
    tech: ["Python", "CLI Tool", "Typer"],
    github: "https://github.com/Yogananth-r/aws-unused-resources",
    featured: false,
  },
  {
    title: "AI Firewall",
    category: "LLM Security Tool",
    description:
      "Detects prompt injections, jailbreak attempts, leaked secrets, and malicious prompts before sending them to an LLM.",
    tech: ["Python", "Regex", "LLM Security"],
    github: "https://github.com/Yogananth-r/ai-firewall",
    featured: false,
  },

];

export const timeline = [
  {
    year: "2016 - 2017",
    title: "Secondary Education",
    company: "The Siddharth Village School CBSE, Hosur",
    description:
      "Completed secondary education with 10 CGPA.",
  },
  {
    year: "2017 - 2019",
    title: "Higher Secondary Education",
    company: "The Ashok Leyland School CBSE, Hosur",
    description:
      "Completed higher secondary education with 88.2%, building a strong academic foundation.",
  },
  {
    year: "2019 - 2023",
    title: "B.E Computer Science & Engineering",
    company: "Anna University Regional Campus, Coimbatore",
    description:
      "Graduated with a CGPA of 9.16 in Computer Science & Engineering.",
  },
  {
    year: "2023 - Present",
    title: "Cloud Engineer",
    company: "Deloitte India",
    description:
      "Working on AWS and GCP infrastructure, cloud automation, Linux administration, monitoring, patching and DevOps tooling.",
  },
];