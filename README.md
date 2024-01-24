#Crachá Vitual

Projeto Crachá Virtual, implementado para selação do LEDES.

Este projeto implementa uma ** API ** em ** NodeJS ** , utilizando *** Express *** como gerenciador de requisições ** HTTP ** , banco de dados não relacional ** MongoDB ** e o framework ODM ** Mongoose ** para intermediar a comunicação entre a aplicação e o banco de dados.

O projeto trata-se de uma aplicação de gerenciamento de perfis que usão crachas virtuais. Portanto é possível cadastrar perfis e atualizar.

Este documento tem como objetivo detalhar os elementos no projeto do Crachá Virtual, incluindo dependências, * scripts * de definição, definição de entidades e * endpoints * .

----
## Entidades
---
- Perfil


## Perfil

Atributo | Tipo
--- ----- | ------
nome | String*
dataNascimento | Date*
educação | Array< Educação* >
certificações | Array< Certificação >
experiências | Array< Experiência >
usuário | Usuário*

> Entidades marcadas com asterisco são entidades obrigatórias. As definições das mesmas estão abaixo.

# # Entidades Internas

# ## Educação

Atributo | Tipo
--- - | ----
instituições | String
entrada | Date
conclusão | Date
nívelEscolaridade | Enum [ "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Pós-Graduação", "mestrado", "Doutorado" ]
completo | boleano

# ## Certificação

Atributo | Tipo
--- - | ----
instituições | String
título | String
cargaHoraria | Number

# ## Experiência

Atributo | Tipo
--- - | ----
instituições | String
entrada | Date
conclusão | Date

# ## Usuário

Atributo | Tipo
--- - | ----
e-mail | String
senha | String

# Pontos finais

## Perfil
Recurso | método | autenticado? | Objetivo | Retorno
--- - | ---- | ---- | ---- |----
/perfil/:id | GET | Sim | Buscar um perfil por ID | Perfil JSON
/perfil | POST | Não | Cadastrar um perfil | Perfil JSON
/perfil/:id | PUT | Sim | Editar um perfil | Perfil JSON
/perfil/:id | DELETE | Sim | Deletar um perfil | Perfil JSON

