import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Lickitung",
         ja: "リキトゥン",
         fr: "Lickitung",
         de: "Lickitung",
         es: "Lamido",
         it: "Lickitung",
         pt: "Lickitung",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [108],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Long Tongue",
            ja: "長い舌",
            fr: "Longue langue",
            de: "Lange Zunge",
            es: "Lengua larga",
            it: "Lingua lunga",
            pt: "Língua longa",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon in play. This attack does 10 damage to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "プレイ中の対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Choisissez 1 du pokemon de votre adversaire en jeu. Cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners im Spiel. Dieser Angriff schädigt dieses Pokémon 10. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Elija 1 de los Pokémon de tu oponente en juego. Este ataque hace 10 daños a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Scegli 1 del Pokemon del tuo avversario in gioco. Questo attacco fa 10 danni a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "Escolha 1 do Pokémon do seu oponente em jogo. Este ataque causa 10 danos a esse Pokémon. Não aplique fraqueza e resistência.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

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
