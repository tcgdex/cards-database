import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Rhydon",
         ja: "チャックのライドン",
         fr: "Rhydon de Chuck",
         de: "Chucks Rhydon",
         es: "Rhydon de Chuck",
         it: "Rhydon di Chuck",
         pt: "Rhydon de Chuck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [112],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Drill Horn",
            ja: "ホーンドリル",
            fr: "Corne de forage",
            de: "Bohrhorn",
            es: "Taladrar bocina",
            it: "Trapano corno",
            pt: "Faça uma buzina",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。ヘッドの場合、それらの1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, choisissez 1 d'entre eux et cette attaque lui fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 davon und dieser Angriff schädigt 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, elija 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se le teste, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, escolha 1 delas e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
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
