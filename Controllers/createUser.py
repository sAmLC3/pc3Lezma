import requests # type: ignore
import json

url = "https://reqres.in/api/users"
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

data = {
    "name": "morpheus1",
    "job": "leader1"
}

response = requests.post(url, headers=headers, data=json.dumps(data))

if response.status_code == 201:
    print("Usuario creado correctamente:")
    print(response.json())
else:
    print(f"Error al crear el usuario: {response.status_code}")