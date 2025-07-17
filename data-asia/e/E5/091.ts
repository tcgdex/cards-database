import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Celebi",
         ja: "セレビ",
         fr: "Célebi",
         de: "Celebi",
         es: "Celebrante",
         it: "Celebi",
         pt: "Celebi",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [251],
      hp: 60,
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
            en: "Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "手からセレビに草、水、またはサイキックの基本エネルギーカードを取り付けると、セレビのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base de l'herbe, de l'eau ou de la psychique de votre main à Celebi, le type (couleur) de Celebi devient le même que ce type d'énergie jusqu'à la fin du virage.",
            de: "Immer wenn Sie ein Gras, Wasser oder eine psychische Basisenergiekarte von Ihrer Hand an Celebi anbringen, wird Celebis Typ (Farbe) bis zum Ende der Kurve mit dieser Art von Energie überein.",
            es: "Cada vez que adjunta una tarjeta de energía básica psíquica o de hierba o psíquica de su mano a Celebi, el tipo de celebridad (color) se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che attacchi un'erba, acqua o carta di energia di base psichica dalla tua mano a Celebi, il tipo di Celebi (colore) diventa lo stesso di quel tipo di energia fino alla fine del turno.",
            pt: "Sempre que você prende uma grama, água ou cartão de energia básica psíquica da sua mão a celebrbi, o tipo (cor) da Celebi se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Water"],
          name: {
            en: "Empathetic Healing",
            ja: "共感的な癒し",
            fr: "Guérison empathique",
            de: "Einfühlsame Heilung",
            es: "Curación empática",
            it: "Guarigione empatica",
            pt: "Cura empática",
          },
          effect: {
            en: "Remove 2 damage counters from Celebi and each Pokemon that's the same type (color) as Celebi.",
            ja: "セレビと、セレビと同じタイプ（色）の各ポケモンから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts de Celebi et de chaque pokemon qui est du même type (couleur) que celebi.",
            de: "Entfernen Sie 2 Schadenszähler von Celebi und jedem Pokemon, das der gleiche Typ (Farbe) wie Celebi ist.",
            es: "Elimine 2 contadores de daño de Celebi y cada Pokémon que sea del mismo tipo (color) que Celebi.",
            it: "Rimuovi 2 contatori di danno da Celebi e ogni Pokemon che è lo stesso tipo (colore) di Celebi.",
            pt: "Remova 2 contadores de danos da Celebi e cada Pokémon que é o mesmo tipo (cor) que Celebi.",
          },
        },
        {
          cost: ["Grass", "Psychic", "Colorless"],
          name: {
            en: "Mind Bend",
            ja: "マインドベンド",
            fr: "Virage",
            de: "Gedankenbiegung",
            es: "Mind Cend",
            it: "Mente piega",
            pt: "Mente Bend",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

};
