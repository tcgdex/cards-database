import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Kecleon",
         ja: "ケクレオン",
         fr: "Kecleon",
         de: "Kecleon",
         es: "Kecleón",
         it: "Kecleon",
         pt: "Kecleon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [352],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Reactive Colors",
            ja: "反応的な色",
            fr: "Couleurs réactives",
            de: "Reaktive Farben",
            es: "Colores reactivos",
            it: "Colori reattivi",
            pt: "Cores reativas",
          },
          effect: {
            en: "If Kecleon has any React Energy cards attached to it, Kecleon is Grass, Fire, Water, Lightning, Psychic, and Fighting type.",
            ja: "Kecleonがそれに取り付けられたReact Energyカードを持っている場合、Kecleonは草、火、水、稲妻、サイキック、戦闘タイプです。",
            fr: "Si Kecleon a des cartes d'énergie React qui y sont attachées, Kecleon est l'herbe, le feu, l'eau, la foudre, le psychique et le type de combat.",
            de: "Wenn Kecleon irgendwelche React Energy -Karten befestigt hat, ist Kecleon Gras, Feuer, Wasser, Blitz, psychisch und kämpfend.",
            es: "Si Kecleon tiene alguna tarjetas de energía reaccionadas adjuntas, Kecleon es hierba, fuego, agua, rayos, psíquicos y tipo de lucha.",
            it: "Se Kecleon ha delle carte di energia react attaccate ad esso, Kecleon è erba, fuoco, acqua, fulmini, psichici e tipi di combattimento.",
            pt: "Se Kecleon tiver algum cartão de energia do React ligado a ele, Kecleon é grama, fogo, água, raio, psíquico e tipo de luta.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tongue Whip",
            ja: "舌鞭",
            fr: "Fouet de langue",
            de: "Zungenpeitsche",
            es: "Látigo de la lengua",
            it: "Frusta della lingua",
            pt: "Chicote de língua",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
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
