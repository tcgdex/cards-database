import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Octillery - 040/087",
         ja: "オクリラリー-040/087",
         fr: "Octtillery - 040/087",
         de: "Oktillerie - 040/087",
         es: "Octillery - 040/087",
         it: "Octillery - 040/087",
         pt: "Octillery - 040/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [224],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Suction Cups",
            ja: "吸引カップ",
            fr: "Ventouses",
            de: "Saugerbecher",
            es: "Tazas de succión",
            it: "Tappeti di aspirazione",
            pt: "Copos de sucção",
          },
          effect: {
            en: "As long as Octillery is your Active Pokmon, whenever the Defending Pokmon retreats, discard all Energy cards attached to the Defending Pokmon when it goes to the Bench.",
            ja: "オクティラーがアクティブなポケモンである限り、防御するポケモンが後退するたびに、ベンチに行くときに防御するポクモンに取り付けられたすべてのエネルギーカードを捨てます。",
            fr: "Tant qu'Octillery est votre Pokémon actif, chaque fois que les Pokémon en défense se retirent, jetez toutes les cartes d'énergie attachées au Pokmon en défense lorsqu'il va au banc.",
            de: "Solange Oktillerie Ihr aktives Pokémon ist, werfen Sie beim Verteidigungsrückgang alle an das verteidigenden Pokmon angeschlossenen Energiekarten, wenn es auf die Bank geht.",
            es: "Mientras la octillería sea su Pokémon activo, cada vez que el Pokémon defensor se retira, deseche todas las tarjetas de energía unidas al Pokmon defensor cuando va al banco.",
            it: "Finché Octillery è il tuo Pokemon attivo, ogni volta che il Pokemon in difesa si ritira, scartare tutte le carte di energia collegate al Pokmon in difesa quando va in panchina.",
            pt: "Enquanto o Octillery for o seu Pokémon ativo, sempre que o Pokémon atual retiro, descarte todos os cartões de energia anexados ao Pokmon defensor quando ele for para o banco.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Smokescreen",
            ja: "煙幕",
            fr: "Écran de fumée",
            de: "Nebelwand",
            es: "Cortina de humo",
            it: "Schermo fumoso",
            pt: "Cortina de fumaça",
          },
          effect: {
            en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
