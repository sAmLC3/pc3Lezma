import requests # type: ignore

url = "https://reqres.in/api/users HTTP/1.1"
headers = {
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Usuarios listados correctamente:")
    print(response.json())
else:
    print(f"Error al listar usuarios: {response.status_code}")
