import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Fearow",
         ja: "Surgeの恐怖中",
         fr: "Fearow du lieutenant-lieutenant",
         de: "Lt. Surges Fearow",
         es: "Fearow del teniente Surge",
         it: "Il Tenente Surge's Fearow",
         pt: "Tenente Surge's Fearow",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [22],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Repeating Drill",
            ja: "繰り返しドリル",
            fr: "Perceuse à répétition",
            de: "Drill wiederholen",
            es: "Taladro repetitivo",
            it: "Drill ripetuta",
            pt: "Repetição de broca",
          },
          effect: {
            en: "Flip 5 coins. This attack does 10 damage times the number of heads.",
            ja: "5枚のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 5 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "5 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 5 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 5 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Vire 5 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Clutch",
            ja: "クラッチ",
            fr: "Embrayage",
            de: "Kupplung",
            es: "Embrague",
            it: "Frizione",
            pt: "Embreagem",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
