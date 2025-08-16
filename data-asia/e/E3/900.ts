import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Lugia",
         ja: "ルギア",
         fr: "Lugia",
         de: "Lugia",
         es: "Lugia",
         it: "Lugia",
         pt: "Lugia",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [249],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

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
            en: "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that Energy card type until the end of the turn.",
            ja: "手からLugiaに火、水、またはサイキックベーシックエネルギーカードを取り付けると、Lugiaのタイプ（色）はターンの終わりまでそのエネルギーカードタイプと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, de l'eau ou du psychique de votre main à Lugia, le type de Lugia (couleur) devient le même que ce type de carte d'énergie jusqu'à la fin du tour.",
            de: "Immer wenn Sie ein Feuer, Wasser oder eine psychische Basiskarte von Ihrer Hand an Lugia anbringen, wird der Typ (Farbe) von Lugia bis zum Ende der Kurve den gleichen wie dieser Energiekartentyp.",
            es: "Cada vez que adjunta una tarjeta de energía básica de fuego, agua o psíquica de su mano a Lugia, el tipo de Lugia (color) se convierte en el mismo tipo de tarjeta de energía hasta el final del turno.",
            it: "Ogni volta che si attacca una scheda energetica di base di incendio, acqua o psichica dalla mano a Lugia, il tipo di Lugia (colore) diventa lo stesso di quel tipo di carta energetica fino alla fine del turno.",
            pt: "Sempre que você prende um cartão de energia básico de fogo, água ou psíquico da sua mão a Lugia, o tipo de Lugia (cor) se torna o mesmo que o tipo de cartão de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Fire"],
          name: {
            en: "Psychic",
            ja: "サイキック",
            fr: "Psychique",
            de: "Psychisch",
            es: "Psíquico",
            it: "Psichico",
            pt: "Psíquico",
          },
          effect: {
            en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokemon.",
            ja: "この攻撃は、防御ポケモンに添付されているエネルギーカードの数の10倍のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts le nombre de cartes d'énergie attachées au Pokémon en défense.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der an das verteidigenden Pokémon angeschlossenen Energiekarten.",
            es: "Este ataque hace 10 veces el número de cartas de energía unidas al Pokémon defensor.",
            it: "Questo attacco fa 10 danni volte il numero di carte di energia collegate al Pokemon in difesa.",
            pt: "Este ataque causa 10 danos vezes o número de cartões de energia ligados ao Pokémon atual.",
          },
        },
        {
          cost: ["Water", "Water", "Fire", "Colorless"],
          name: {
            en: "Steam Blast",
            ja: "蒸気爆発",
            fr: "Explosion de vapeur",
            de: "Dampfexplosion",
            es: "Explosión de vapor",
            it: "Blast di vapore",
            pt: "Explosão de vapor",
          },
          effect: {
            en: "Discard an Energy card attached to Lugia.",
            ja: "Lugiaに取り付けられたエネルギーカードを廃棄します。",
            fr: "Jeter une carte d'énergie attachée à Lugia.",
            de: "Legen Sie eine an Lugia verbundene Energiekarte ab.",
            es: "Deseche una tarjeta de energía unida a Lugia.",
            it: "Scartare una carta energetica attaccata a Lugia.",
            pt: "Descarte um cartão de energia ligado a Lugia.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

};
