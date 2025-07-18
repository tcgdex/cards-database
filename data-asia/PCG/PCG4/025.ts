import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Vaporeon",
         ja: "Vaporeon",
         fr: "Vaporeon",
         de: "Vaporeon",
         es: "Vaporeón",
         it: "Vaporeon",
         pt: "Vaporeon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [134],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Aqua Supply",
            ja: "アクア供給",
            fr: "Aqua Supply",
            de: "Aqua -Versorgung",
            es: "Suministro de Aqua",
            it: "Aqua Supply",
            pt: "Aqua Supply",
          },
          effect: {
            en: "You may attach a basic Energy card from your hand to 1 of your Pokemon.",
            ja: "あなたはあなたの手からあなたのポケモンの1にあなたの手からの基本的なエネルギーカードを添付することができます。",
            fr: "Vous pouvez attacher une carte d'énergie de base de votre main à 1 de votre Pokémon.",
            de: "Sie können eine grundlegende Energiekarte von Ihrer Hand an 1 Ihres Pokémon anbringen.",
            es: "Puede adjuntar una tarjeta de energía básica desde su mano a 1 de su Pokémon.",
            it: "Puoi allegare una scheda energetica di base dalla tua mano a 1 del tuo Pokemon.",
            pt: "Você pode anexar um cartão de energia básico da sua mão a 1 do seu Pokémon.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Multi Bubble",
            ja: "マルチバブル",
            fr: "Multiplié",
            de: "Mehrblase",
            es: "Múltiple burbuja",
            it: "Multi Bubble",
            pt: "Multi Bubble",
          },
          effect: {
            en: "If Vaporeon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokemon is now Asleep.",
            ja: "Vaporeonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、ディフェンディングポケモンは眠っています。",
            fr: "Si Vaporeon a 3 types ou plus de cartes d'énergie de base qui y sont attachées, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant endormi.",
            de: "Wenn Vaporeon 3 oder mehr verschiedene Arten von grundlegenden Energiekarten befindet, enthält dieser Angriff 40 Schäden plus 20 weitere Schäden, und das verteidigende Pokémon schläft jetzt.",
            es: "Si Vaporeon tiene 3 o más tipos diferentes de cartas de energía básicas unidas, este ataque hace 40 daños más 20 daños más y el Pokémon defensor ahora está dormido.",
            it: "Se Vaporeon ha 3 o più tipi diversi di carte di energia di base collegate ad esso, questo attacco infligge 40 danni più 20 danni in più e il Pokemon in carica è ora addormentato.",
            pt: "Se o Vaporeon tiver 3 ou mais tipos diferentes de cartões básicos de energia anexados a ele, esse ataque causará 40 danos mais 20 mais danos e o pokemon defensor está agora dormindo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
