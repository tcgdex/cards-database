import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto",
         ja: "カブト",
         fr: "Kabuto",
         de: "Kabuto",
         es: "Kabuto",
         it: "Kabuto",
         pt: "Kabuto",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [140],
      hp: 30,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Kabuto Armor",
            ja: "カブトの鎧",
            fr: "Armure de kabuto",
            de: "Kabuto -Rüstung",
            es: "Armadura de kabuto",
            it: "Kabuto Armor",
            pt: "Armadura de Kabuto",
          },
          effect: {
            en: "Whenever an attack <em>(even your own)</em> does damage to Kabuto <em>(after applying Weakness and Resistance)</em>, that attack does only half the damage to Kabuto (rounded down to the nearest 10). <em>(Any other effects of attacks still happen.)</em> This power stops working while Kabuto is affected by a Special Condition.",
            ja: "攻撃が<em>（あなた自身でさえ）</em>がカブト<em>に損傷を与えるとき（脱力と抵抗を適用した後）</em>、その攻撃はカブトへのダメージの半分しかありません（最も近い10に丸められます）。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは機能しなくなり、カブトは特別な状態の影響を受けます。",
            fr: "Chaque fois qu'une attaque <em> (même la vôtre) </em> endommage Kabuto <em> (après avoir appliqué une faiblesse et une résistance) </em>, cette attaque ne fait que la moitié des dégâts à Kabuto (arrondi au 10 le plus proche). <em> (tous les autres effets des attaques se produisent.) </em> Ce pouvoir cesse de fonctionner tandis que Kabuto est affecté par une condition spéciale.",
            de: "Immer wenn ein Angriff <em> (sogar Ihr eigenes) </em> Kabuto <em> schädigt (nach der Anwendung von Schwäche und Widerstand) </em> ist dieser Angriff nur die Hälfte des Schadens von Kabuto (abgerundet auf die nächsten 10). <em> (alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Cada vez que un ataque <em> (incluso el tuyo) </em> da daño a Kabuto <em> (después de aplicar debilidad y resistencia) </em>, ese ataque solo hace la mitad del daño a Kabuto (redondeado a los 10 más cercanos). <em> (todavía ocurren otros efectos de los ataques). </em> Este poder deja de funcionar, mientras que Kabuto se ve afectado por una condición especial.",
            it: "Ogni volta che un attacco <em> (anche il tuo) </em> fa danni a Kabuto <em> (dopo aver applicato la debolezza e la resistenza) </em>, quell'attacco fa solo metà del danno a Kabuto (arrotondato verso i 10 più vicini). <em> (qualsiasi altro effetto degli attacchi ancora accade.) </em> Questo potere smette di funzionare mentre Kabuto è influenzato da una condizione speciale.",
            pt: "Sempre que um ataque <em> (mesmo o seu) </em> danifica a Kabuto <em> (depois de aplicar fraqueza e resistência) </em>, esse ataque causa apenas metade dos danos a Kabuto (arredondado para o 10 mais próximo). <em> (Quaisquer outros efeitos dos ataques ainda acontecem.) </em> Esse poder para de funcionar enquanto Kabuto é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
