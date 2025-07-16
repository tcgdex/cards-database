import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeot",
         ja: "pidgeot",
         fr: "Pidgeot",
         de: "Pidgeot",
         es: "Pidgeot",
         it: "Pidgeot",
         pt: "PIDGEOT",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [18],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hurricane",
            ja: "ハリケーン",
            fr: "Ouragan",
            de: "Hurrikan",
            es: "Huracán",
            it: "Uragano",
            pt: "Furacão",
          },
          effect: {
            en: "Unless this attack Knocks Out the Defending Pokemon, return the Defending Pokemon and all cards attached to it to your opponent's hand.",
            ja: "この攻撃が防御ポケモンをノックアウトしない限り、防御ポケモンとそれに取り付けられたすべてのカードを相手の手に返します。",
            fr: "À moins que cette attaque élimine le Pokémon en défense, retournez le Pokémon en défense et toutes les cartes qui lui sont attachées à la main de votre adversaire.",
            de: "Wenn dieser Angriff nicht das verteidigende Pokemon ausschlägt, geben Sie das verteidigende Pokemon und alle Karten an die Hand Ihres Gegners zurück.",
            es: "A menos que este ataque noquee al Pokémon defensor, devuelva el Pokémon defensor y todas las cartas unidas a él a la mano de tu oponente.",
            it: "A meno che questo attacco non elimini il Pokemon in carica, restituisci il Pokemon in carica e tutte le carte attaccate alla mano del tuo avversario.",
            pt: "A menos que esse ataque nocauteie o Pokémon atual, devolva o Pokémon atual e todas as cartas anexadas à mão do seu oponente.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
