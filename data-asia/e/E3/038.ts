import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Remoraid",
         ja: "REMORAID",
         fr: "Remoraid",
         de: "Remoraid",
         es: "Remorada",
         it: "Rimorso",
         pt: "Remoraid",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [223],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Splatter",
            ja: "スプラッタ",
            fr: "Éclabousser",
            de: "Spritzer",
            es: "Salpicar",
            it: "Schizzi",
            pt: "Respingo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon in play. This attack does 10 damage to that Pokemon. Don't apply Weakness or Resistance for this attack.",
            ja: "プレイ中の対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃に弱さや抵抗を適用しないでください。",
            fr: "Choisissez 1 du pokemon de votre adversaire en jeu. Cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse ou la résistance pour cette attaque.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners im Spiel. Dieser Angriff schädigt dieses Pokémon 10. Wenden Sie keine Schwäche oder Widerstand für diesen Angriff an.",
            es: "Elija 1 de los Pokémon de tu oponente en juego. Este ataque hace 10 daños a ese Pokémon. No aplique debilidad o resistencia para este ataque.",
            it: "Scegli 1 del Pokemon del tuo avversario in gioco. Questo attacco fa 10 danni a quel Pokemon. Non applicare debolezza o resistenza per questo attacco.",
            pt: "Escolha 1 do Pokémon do seu oponente em jogo. Este ataque causa 10 danos a esse Pokémon. Não aplique fraqueza ou resistência a este ataque.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
