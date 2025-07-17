import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Charizard",
         ja: "カリザード",
         fr: "Charizard",
         de: "Charizard",
         es: "Charizard",
         it: "Charizard",
         pt: "Charizard",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 110,
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
            en: "Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "火、稲妻、または基本的なエネルギーカードとの戦いを手からチャリザードに取り付けると、Charizardのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, de la foudre ou de combattre de votre main à Charizard, le type de Charizard (couleur) devient le même que ce type d'énergie jusqu'à la fin du tour.",
            de: "Immer wenn Sie ein Feuer, einen Blitz oder eine grundlegende Energiekarte von Ihrer Hand an Charizard anbringen, wird Charizards Typ (Farbe) bis zum Ende der Kurve gleich diese Art von Energie.",
            es: "Cada vez que adjunta un incendio, un rayo o una tarjeta de energía básica de su mano a Charizard, el tipo de Charizard (color) se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che si attacca una scheda di energia di base, un fulmine o combattere dalla tua mano a Charizard, il tipo di Charizard (colore) diventa lo stesso di quel tipo di energia fino alla fine del turno.",
            pt: "Sempre que você prende um incêndio, um raio ou lutando com cartão de energia básica da sua mão a Charizard, o tipo de Charizard (cor) se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fighting"],
          name: {
            en: "Fireblast",
            ja: "ファイアブラスト",
            fr: "Coup de feu",
            de: "Feuerblast",
            es: "Fireblast",
            it: "Fireblast",
            pt: "Fireblast",
          },
          effect: {
            en: "Discard an Energy card attached to Charizard.",
            ja: "Charizardに取り付けられたエネルギーカードを廃棄します。",
            fr: "Jeter une carte d'énergie attachée à Charizard.",
            de: "Verwerfen Sie eine an Charizard verbundene Energiekarte.",
            es: "Deseche una tarjeta de energía unida a Charizard.",
            it: "Scartare una carta energetica collegata a Charizard.",
            pt: "Descarte um cartão de energia anexado a Charizard.",
          },
          damage: 40,
        },
        {
          cost: ["Fire", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Dragon Tail",
            ja: "ドラゴンテール",
            fr: "Queue de dragon",
            de: "Drachenschwanz",
            es: "Cola de dragón",
            it: "Dragon Tail",
            pt: "Cauda de dragão",
          },
          effect: {
            en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 50 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 50 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 50 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 50 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 4,

};
