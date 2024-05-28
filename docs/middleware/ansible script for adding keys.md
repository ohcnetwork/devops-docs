# Ansible Script to standardise access via SSH

```
├── edit.yml
├── inventory
│   └── hosts.yml
└── ssh_public_key.pub
```

The Ansible playbook is designed to standardize access via SSH by adding public keys to the teleicu-middleware instances.

**hosts.yml** contains the list of hostnames of all the instances.

**edit.yml** connects to all the hosts specified in `hosts.yml` and checks if the specified key is listed in the `.ssh/authorized_keys` file. If not, it adds the given public key, thereby granting access.

**ssh_public_key.pub** is the public key pair for which we are granting access.

## How To 

1. Clone the repository [Middleware-Ansible](https://github.com/10bedicu/middleware-ansible)  and cd into it. 
2. Create a python venv by running `python -m venv ansible`
3. Install ansible by running `pip install -r requirements.txt`
4. Run the playbook by `ansible-playbook -i inventory/hosts.yml edit.yml -u username` 
