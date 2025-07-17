import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Ho-Oh",
         ja: "ho-oh",
         fr: "Ho-oh",
         de: "Ho-oh",
         es: "Ho-oh",
         it: "Ho-oh",
         pt: "Ho-oh",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [250],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Crystal Type",
            ja: "クリスタルタイプ",
            fr: "Type de cristal",
            de: "Kristalltyp",
            es: "Tipo de cristal",
            it: "Tipo di cristallo",
            pt: "Tipo de cristal",
          },
          effect: {
            en: "Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-Oh, Ho-Oh's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "火、水、または稲妻の基本エネルギーカードを手からho-ohに取り付けると、ho-ohのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, de l'eau ou de la foudre de votre main à Ho-oh, le type de Ho-Oh (couleur) devient le même que ce type d'énergie jusqu'à la fin du virage.",
            de: "Immer wenn Sie ein Feuer-, Wasser- oder Blitz-Basiskarte von Ihrer Hand an HO-OH anbringen, wird der Typ (Farbe) von Ho-OH bis zum Ende der Kurve mit dieser Art von Energie.",
            es: "Cada vez que adjunta una tarjeta de energía básica de fuego, agua o relámpagos de su mano a Ho-oh, el tipo (color) de Ho-oh se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che si attacca una scheda di energia di base di incendio, acqua o fulmini dalla tua mano a Ho-OH, il tipo di Ho-OH (colore) diventa lo stesso di quel tipo di energia fino alla fine della svolta.",
            pt: "Sempre que você prende um cartão de energia básico de fogo, água ou raio da sua mão a HO-OH, o tipo de HO-OH (cor) se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Lightning"],
          name: {
            en: "Holy Flame",
            ja: "聖なる炎",
            fr: "Flamme sainte",
            de: "Heilige Flamme",
            es: "Santa llama",
            it: "Santa fiamma",
            pt: "Sagrada chama",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Water", "Water", "Colorless"],
          name: {
            en: "Scalding Steam",
            ja: "蒸気を乱す",
            fr: "Vapeur",
            de: "Dampf verkleinern",
            es: "Vapor hirviente",
            it: "Vapore scottante",
            pt: "Vapor escaldante",
          },
          effect: {
            en: "Discard an Energy card attached to Ho-Oh and flip a coin.  If heads, the Defending Pokemon is now Burned.",
            ja: "Ho-Ohに取り付けられたエネルギーカードを廃棄し、コインをひっくり返します。  頭の場合、防御するポケモンが燃やされます。",
            fr: "Jeter une carte d'énergie attachée à Ho-oh et retourner une pièce.  Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine an Ho-oh befestigte Energiekarte wegwerfen und eine Münze umdrehen.  Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Deseche una tarjeta de energía unida a HO-OH y voltee una moneda.  Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Scartare una carta energetica attaccata a Ho-OH e capovolgere una moneta.  Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Descarte um cartão de energia preso ao HO-OH e vire uma moeda.  Se as cabeças, o pokemon defensor agora está queimado.",
          },
          damage: 40,
        },
      ],

      retreat: 3,

};
