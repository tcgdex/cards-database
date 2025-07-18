import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Slowpoke",
         ja: "サブリナのスローポーク",
         fr: "SlowPoke de Sabrina",
         de: "Sabrinas Slowpoke",
         es: "Slowpoke de Sabrina",
         it: "Slowpoke di Sabrina",
         pt: "Sabrina's Slowpoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [79],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Lazy Attack",
            ja: "怠zyな攻撃",
            fr: "Attaque paresseuse",
            de: "Fauler Angriff",
            es: "Ataque perezoso",
            it: "Attacco pigro",
            pt: "Ataque preguiçoso",
          },
          effect: {
            en: "Sabrina's Slowpoke is now Asleep (after doing damage).",
            ja: "SabrinaのSlowPokeは今眠っています（ダメージを与えた後）。",
            fr: "Le SlowPoke de Sabrina est maintenant endormi (après avoir fait des dégâts).",
            de: "Sabrinas Slowpoke schläft jetzt (nach Schaden).",
            es: "Slowpoke de Sabrina ahora está dormido (después de hacer daño).",
            it: "Slowpoke di Sabrina ora dorme (dopo aver fatto danni).",
            pt: "O Slowpoke de Sabrina está agora dormindo (depois de causar danos).",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
