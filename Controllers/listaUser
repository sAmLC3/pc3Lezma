import requests # type: ignore

user_id = 1
url = f"https://reqres.in/api/users/1 HTTP/1.1"
headers = {
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(f"Usuario {user_id} listado correctamente:")
    print(response.json())
else:
    print(f"Error al listar el usuario {user_id}: {response.status_code}")