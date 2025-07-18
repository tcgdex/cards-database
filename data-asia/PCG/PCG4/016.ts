import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo",
         ja: "マグカルゴ",
         fr: "Magcargo",
         de: "Magcargo",
         es: "Magcargo",
         it: "Magcargo",
         pt: "Magcargo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dual Armor",
            ja: "デュアルアーマー",
            fr: "Armure double",
            de: "Doppelpanzer",
            es: "Armadura dual",
            it: "Doppia armatura",
            pt: "Armadura dupla",
          },
          effect: {
            en: "As long as Magcargo has any Fighting Energy attached to it, Magcargo is both Fire and Fighting type.",
            ja: "Magcargoにはそれに格闘エネルギーが付いている限り、Magcargoは火災と戦闘タイプの両方です。",
            fr: "Tant que Magcargo a une énergie de combat qui lui est attachée, Magcargo est à la fois le feu et le type de combat.",
            de: "Solange Magcargo irgendwelche Kampfenergie hat, ist Magcargo sowohl das Feuer als auch den Kampf.",
            es: "Mientras Magcargo tenga alguna energía de lucha adjunta, Magcargo es tanto fuego como de tipo de lucha.",
            it: "Fintanto che Magcargo ha un'energia di combattimento ad esso attaccata, Magcargo è sia di incendio che di tipo di combattimento.",
            pt: "Enquanto o Magcargo tiver qualquer energia de combate a ele, o Magcargo é o tipo de fogo e de luta.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
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
          damage: 30,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Extra Flame",
            ja: "余分な炎",
            fr: "Flamme supplémentaire",
            de: "Zusätzliche Flamme",
            es: "Llama extra",
            it: "Fiamma extra",
            pt: "Chama extra",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 40 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 40 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 40 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 40 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 40 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
