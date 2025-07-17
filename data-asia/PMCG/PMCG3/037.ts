import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Graveler",
         ja: "砂利",
         fr: "Graveleuse",
         de: "Schotter",
         es: "Grava",
         it: "Graveler",
         pt: "Grave",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [75],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Harden",
            ja: "硬化します",
            fr: "Durcir",
            de: "Härten",
            es: "Endurecer",
            it: "Indurire",
            pt: "Endurecer",
          },
          effect: {
            en: "During your opponent's next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
            ja: "対戦相手の次のターン中に、砂利と抵抗を適用した後）に30回以下の損害が発生したときはいつでも、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Pendant le prochain virage de votre adversaire, chaque fois que 30 dégâts ou moins sont causés au gravier (après avoir appliqué une faiblesse et une résistance), empêchez ces dommages. (Tout autre effet des attaques se produit.)",
            de: "Verhindern Sie während der nächsten Kurve Ihres Gegners, wenn 30 oder weniger Schäden an Kieser angerichtet werden (nach Auftragen von Schwäche und Widerstand), diese Schädigung zu verhindern. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Durante el próximo turno de tu oponente, cada vez que se causan 30 o menos daño al grava (después de aplicar debilidad y resistencia), evite ese daño. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Durante il turno successivo dell'avversario, ogni volta che vengono fatti 30 o meno danni a Graveler (dopo aver applicato la debolezza e la resistenza), prevenire tali danni. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Durante o próximo turno do seu oponente, sempre que 30 ou menos danos são causados ao Graveler (depois de aplicar fraqueza e resistência), evite esse dano. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },

        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 40,
        },
      ],

      retreat: 2,

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
