import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoking",
         ja: "ニドキング",
         fr: "Nidoking",
         de: "Nidoking",
         es: "Nidoking",
         it: "Nidoking",
         pt: "Nidoking",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 100,
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
            en: "Whenever you attach a Grass, Lightning, or Fire basic Energy card from your hand to Nidoking, Nidoking's type (color) becomes the same as that Energy card type until the end of the turn.",
            ja: "草、稲妻、または火の基本エネルギーカードを手からニドギングに取り付けると、ニドキングのタイプ（色）はターンの終わりまでそのエネルギーカードのタイプと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base, de la foudre ou du licenciement de votre main à Nidoking, le type (couleur) de Nidoking devient le même que ce type de carte d'énergie jusqu'à la fin du virage.",
            de: "Wenn Sie ein Gras-, Blitz- oder Feuertor -Basiskarte von Ihrer Hand an Nidoking anbringen, wird der Typ (Farbe) von Nidoking (Farbe) bis zum Ende der Kurve den gleichen wie dieser Energiekartentyp.",
            es: "Cada vez que adjunta una tarjeta de energía básica de hierba, rayos o dispara desde su mano a Nidoking, el tipo de nidoking (color) se convierte en el mismo tipo de tarjeta de energía hasta el final del turno.",
            it: "Ogni volta che si attacca un'erba, un fulmine o una scheda di energia di base dalla tua mano a Nidoking, il tipo di Nidoking (colore) diventa lo stesso di quel tipo di carta energetica fino alla fine del turno.",
            pt: "Sempre que você prende um cartão de energia básica de grama, raio ou disparo da mão até a Nidoking, o tipo de Nidoking (cor) se torna o mesmo que o tipo de cartão de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Poison Horn",
            ja: "ポイズンホーン",
            fr: "Corne de poison",
            de: "Gifthorn",
            es: "Bocina",
            it: "Corno veleno",
            pt: "Chifre de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Fighting", "Fighting"],
          name: {
            en: "Rolling Thunder",
            ja: "ローリングサンダー",
            fr: "Thunder roulant",
            de: "Rollender Donner",
            es: "Trueno rodante",
            it: "Tuono rotolante",
            pt: "Rolling Thunder",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack does 10 damage to each of your Benched Pokemon. (Don't apply Weakness or Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. Si Tails, cette attaque inflige 10 dégâts à chacun de vos pokemon bancés. (N'appliquez pas la faiblesse ou la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, dieser Angriff an jedem Bankpokémon Ihres Gegners Schaden zufügt. Wenn Schwänze, verursacht dieser Angriff 10 Schäden an jedem Ihrer Bankpokémon. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. Si Tails, este ataque hace 10 daños a cada uno de sus Pokémon de banca. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se code, questo attacco infligge 10 danni a ciascuno dei pokemon in panchina. (Non applicare debolezza o resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. Se as caudas, esse ataque causam 10 danos a cada um dos seus Pokémon bancos. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

};
