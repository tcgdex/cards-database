import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat",
         ja: "クロバット",
         fr: "Crobat",
         de: "Crobat",
         es: "Cobat",
         it: "Crobat",
         pt: "CROBAT",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 80,
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
            en: "Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat's type (color) becomes the same as that type of Energy until the end of the turn.",
            ja: "手からクロバットに草、火、またはサイキックの基本エネルギーカードを取り付けると、クロバットのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base de l'herbe, du feu ou de la psychique de votre main à Crobat, le type de Crobat (couleur) devient le même que ce type d'énergie jusqu'à la fin du virage.",
            de: "Wenn Sie eine Gras-, Feuer- oder psychische Grundergiekarte von Ihrer Hand an Crobat anbringen, wird der Typ (Farbe) von Crobat bis zum Ende der Kurve mit dieser Art von Energie.",
            es: "Cada vez que adjunta un césped, fuego o tarjeta de energía básica psíquica de su mano a Crobat, el tipo (color) de Crobat se convierte en el mismo que ese tipo de energía hasta el final del turno.",
            it: "Ogni volta che si attacca un'erba, un fuoco o un'energia di base psichica dalla tua mano a Crobat, il tipo di Crobat (colore) diventa lo stesso di quel tipo di energia fino alla fine del turno.",
            pt: "Sempre que você prende uma grama, fogo ou cartão de energia básica psíquica da sua mão a Crobat, o tipo de Crobat (cor) se torna o mesmo que esse tipo de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Fire", "Colorless"],
          name: {
            en: "Poison Flame",
            ja: "毒の炎",
            fr: "Flamme de poison",
            de: "Giftflamme",
            es: "Llamado venenoso",
            it: "Fiamma del veleno",
            pt: "Chama de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned and Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは燃やされ、毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé et empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokémon jetzt verbrannt und vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está quemado y envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato e avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está queimado e envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Psychic", "Psychic"],
          name: {
            en: "Squared Attack",
            ja: "四角い攻撃",
            fr: "Attaque au carré",
            de: "Quadratischer Angriff",
            es: "Ataque al cuadrado",
            it: "Attacco quadrato",
            pt: "Ataque quadrado",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],


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
