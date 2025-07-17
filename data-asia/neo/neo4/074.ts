import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Machoke",
         ja: "ライトマチョーク",
         fr: "Machoke léger",
         de: "Leichte Machoke",
         es: "Ligero machoke",
         it: "Machoke leggero",
         pt: "Machoke leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Return Home",
            ja: "家に帰る",
            fr: "Rentrer chez lui",
            de: "Heimkehr",
            es: "Regresar a casa",
            it: "Torna a casa",
            pt: "Volte para casa",
          },
          effect: {
            en: "If you have any Benched Pokemon, shuffle 1 of them and all cards attached to it into your deck.",
            ja: "ベンチ付きポケモンがある場合は、それらの1つをシャッフルし、すべてのカードがデッキに取り付けられています。",
            fr: "Si vous avez des Pokémon bancés, en mélanger 1 et toutes les cartes qui y sont attachées dans votre deck.",
            de: "Wenn Sie ein Bank -Pokemon haben, mischen Sie 1 davon und alle Karten, die an Ihr Deck angeschlossen sind.",
            es: "Si tienes algún Pokémon de banca, baraja 1 de ellos y todas las cartas adjuntas en tu mazo.",
            it: "Se hai dei Pokemon in panchina, shuffle 1 di loro e tutte le carte attaccate nel tuo mazzo.",
            pt: "Se você tiver algum Pokémon em banco, embaralhe 1 deles e todas as cartas anexadas a ele no seu baralho.",
          },
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Gentle Kick",
            ja: "穏やかなキック",
            fr: "Coup de pied doux",
            de: "Sanfter Kick",
            es: "Patada suave",
            it: "Calcio delicato",
            pt: "Kick gentil",
          },
          effect: {
            en: "If the Defending Pokemon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage.",
            ja: "防御するポケモンにダメージカウンターがない場合、この攻撃は40のダメージを与えます。ある場合、この攻撃は20のダメージを与えます。",
            fr: "Si le Pokémon en défense n'a pas de compteurs de dégâts dessus, cette attaque fait 40 dégâts. S'il en a, cette attaque fait 20 dégâts.",
            de: "Wenn das verteidigende Pokemon keine Schadenszähler hat, verursacht dieser Angriff 40 Schaden. Wenn es etwas hat, verursacht dieser Angriff 20 Schaden.",
            es: "Si el Pokémon defensor no tiene contadores de daño, este ataque hace 40 daños. Si tiene alguno, este ataque hace 20 daños.",
            it: "Se il Pokemon in difesa non ha contatori di danni su di esso, questo attacco fa 40 danni. Se ne ha, questo attacco fa 20 danni.",
            pt: "Se o Pokémon atual não tiver contadores de danos, esse ataque causará 40 danos. Se houver algum, esse ataque causará 20 danos.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
