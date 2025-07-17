import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops - 090/088",
         ja: "Kabutops -090/088",
         fr: "Kabutops - 090/088",
         de: "Kabutops - 090/088",
         es: "Kabutops - 090/088",
         it: "Kabutops - 090/088",
         pt: "Kabutops - 090/088",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage2",

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
            en: "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutops's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "手からカブトップスまでの水、稲妻、または基本エネルギーカードとの戦いをするたびに、カブトップスのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, de foudre ou de combattre de votre main aux kabutops, le type de kabutops (couleur) devient le même que ce type d'énergie jusqu'à la fin du virage.",
            de: "Immer wenn Sie ein Wasser, einen Blitz oder eine grundlegende Energiekarte von Ihrer Hand an Kabutops anbringen, wird Kabutops (Farbe) bis zum Ende der Kurve mit dieser Art von Energie gleich.",
            es: "Cada vez que adjunta un agua de agua, un rayo o una tarjeta de energía básica de su mano a Kabutops, el tipo de kabutops (color) se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che attacchi un'acqua, un fulmine o combattere la scheda di energia di base dalla tua mano a Kabutops, il tipo di kabutops (colore) diventa lo stesso di quel tipo di energia fino alla fine del turno.",
            pt: "Sempre que você prende uma água, um raio ou luta contra o cartão básico de energia da sua mão a Kabutops, o tipo de kabutops (cor) se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Water", "Colorless"],
          name: {
            en: "Draining Cut",
            ja: "排水カット",
            fr: "Époudeur",
            de: "Abnutzung",
            es: "Corte de drenaje",
            it: "Drenaggio taglio",
            pt: "Corte drenante",
          },
          effect: {
            en: "Remove a damage counter from Kabutops.",
            ja: "Kabutopsからダメージカウンターを取り外します。",
            fr: "Retirez un compteur de dégâts des kabutops.",
            de: "Entfernen Sie einen Schadenschalter aus Kabutops.",
            es: "Retire un contador de daños de Kabutops.",
            it: "Rimuovere un contatore di danni da Kabutops.",
            pt: "Remova um contador de danos de Kabutops.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Triple Cutter",
            ja: "トリプルカッター",
            fr: "Triple couteau",
            de: "Dreifachschneider",
            es: "Cortador triple",
            it: "Triple tagliatore",
            pt: "Cortador triplo",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 3,

};
