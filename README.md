# KnexJS Sqlite CRUD

API:

Projects pagination (5 projects per page)
http://localhost:3333/projects?page=2

User_ID's projects
http://localhost:3333/projects?user_id=2

Return the total count of projects (X-Total-Count) inside the Http Header

Soft Delete for users: they are not deleted from the database; instead they have their column 'deleted_at' setted with a timestamp. The API does not return soft deleted users, neither their projects.
