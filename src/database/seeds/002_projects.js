exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          user_id: 1,
          title: "Spider-Man",
        },
        {
          user_id: 1,
          title: "Iron Man",
        },
        {
          user_id: 1,
          title: "Hulk",
        },
        {
          user_id: 1,
          title: "Ant-Man",
        },
        {
          user_id: 1,
          title: "Doctor Strange",
        },
        {
          user_id: 1,
          title: "Captain Marvel",
        },
        {
          user_id: 1,
          title: "Groot",
        },
        {
          user_id: 1,
          title: "Black Panther",
        },
        {
          user_id: 1,
          title: "Doctor Doom",
        },
        {
          user_id: 1,
          title: "Fantastic Four",
        },
        {
          user_id: 1,
          title: "Nick Fury",
        },
        {
          user_id: 1,
          title: "Falcon",
        },
        {
          user_id: 1,
          title: "Galactus",
        },
        {
          user_id: 1,
          title: "Lizard",
        },
        {
          user_id: 1,
          title: "Loki",
        },
        {
          user_id: 1,
          title: "X-Men",
        },
        {
          user_id: 1,
          title: "Silver Surfer",
        },
        {
          user_id: 1,
          title: "Thor",
        },
        {
          user_id: 1,
          title: "Mysterio",
        },
        {
          user_id: 1,
          title: "Doctor Octopus",
        },
        {
          user_id: 2,
          title: "Star Wars",
        },
        {
          user_id: 2,
          title: "Raiders of the Lost Ark",
        },
        {
          user_id: 2,
          title: "Return of the Jedi",
        },
        {
          user_id: 2,
          title: "Willow",
        },
        {
          user_id: 2,
          title: "Indiana Jones and the Last Crusade",
        },
        {
          user_id: 2,
          title: "Star Wars: Episode I – The Phantom Menace",
        },
        {
          user_id: 2,
          title: "Star Wars Episode II: Attack of the Clones",
        },
        {
          user_id: 2,
          title: "Star Wars Episode III: Revenge of the Sith",
        },
        {
          user_id: 3,
          title: "Metal Gear",
        },
        {
          user_id: 3,
          title: "Metal Gear 2: Solid Snake",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid 2: Sons of Liberty",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid: The Twin Snakes",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid 3: Snake Eater",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid 4: Guns of the Patriots",
        },
        {
          user_id: 3,
          title: "Metal Gear Solid V: The Phantom Pain",
        },
        {
          user_id: 3,
          title: "P.T.",
        },
        {
          user_id: 3,
          title: "Death Stranding",
        },
      ]);
    });
};

// { username: "stanlee" },
// { username: "georgelucas" },
// { username: "hideokojima" },
