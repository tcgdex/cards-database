import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Banette",
         ja: "バネット",
         fr: "Banette",
         de: "Banette",
         es: "Banette",
         it: "Banette",
         pt: "Banette",
      },


      category: "Pokemon",
      dexId: [354],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Grudge",
            ja: "grみ",
            fr: "Rancune",
            de: "Groll",
            es: "Escatimar",
            it: "Rancore",
            pt: "Rancor",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
            ja: "対戦相手が取った各賞カードに対して20のダメージと10件のダメージがさらに10件のダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque carte de prix que votre adversaire a subi.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede Preiskarte, die Ihr Gegner angenommen hat.",
            es: "Hace 20 daños más 10 daños más para cada tarjeta de premio que ha recibido su oponente.",
            it: "Fa 20 danni più 10 danni in più per ogni carta premio che l'avversario ha subito.",
            pt: "Causa 20 danos mais 10 mais danos para cada cartão de prêmio que seu oponente tomou.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Bench Manipulation",
            ja: "ベンチ操作",
            fr: "Manipulation du banc",
            de: "Bankmanipulation",
            es: "Manipulación de banco",
            it: "Manipolazione della panchina",
            pt: "Manipulação de bancada",
          },
          effect: {
            en: "Your opponent flips a number of coins equal to the number of his or her Benched Pokemon. This attack does 40 damage times the number of tails. This attack's damage isn't affected by Weakness or Resistance.",
            ja: "対戦相手は、ベンチのポケモンの数に等しい多数のコインをひっくり返します。この攻撃は、尾の数の40回のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Votre adversaire retourne un certain nombre de pièces égales au nombre de son pokemon bancaire. Cette attaque fait 40 dégâts de temps le nombre de queues. Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Ihr Gegner dreht eine Reihe von Münzen um, die der Anzahl seines Pokémons seines Bank -Pokémons entsprechen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Schwänze. Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Tu oponente voltea una serie de monedas igual al número de su banca Pokémon. Este ataque hace 40 veces el número de colas. El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Il tuo avversario lancia una serie di monete pari al numero del suo Pokemon in panchina. Questo attacco fa 40 danni volte al numero di code. Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Seu oponente vira várias moedas iguais ao número de Pokémon em banco. Este ataque causa 40 danos vezes o número de caudas. O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
