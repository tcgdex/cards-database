import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte",
         ja: "オマニテ",
         fr: "Omanyte",
         de: "Omanyte",
         es: "Omanyte",
         it: "Omanyte",
         pt: "Omanyte",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 40,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Clairvoyance",
            ja: "千里眼",
            fr: "Voyance",
            de: "Hellsehen",
            es: "Clarividencia",
            it: "Chiaroveggenza",
            pt: "Clarividência",
          },
          effect: {
            en: "Your opponent plays with his or her hand face up. This power stops working while Omanyte is affected by a Special Condition.",
            ja: "あなたの対戦相手は彼または彼女の手を上にして遊ぶ。このパワーは機能しなくなり、オマニテは特別な状態の影響を受けます。",
            fr: "Votre adversaire joue avec sa main face vers le haut. Cette puissance cesse de fonctionner tandis qu'Omanyte est affectée par une condition spéciale.",
            de: "Dein Gegner spielt mit seiner Hand mit dem Gesicht nach oben. Diese Kraft hört auf zu funktionieren, während Omanyte von einem besonderen Zustand betroffen ist.",
            es: "Tu oponente juega con su mano boca arriba. Esta potencia deja de funcionar mientras Omanyte se ve afectado por una condición especial.",
            it: "Il tuo avversario gioca con la mano a faccia in su. Questo potere smette di funzionare mentre Omanyte è influenzato da una condizione speciale.",
            pt: "Seu oponente brinca com a mão com a mão para cima. Esse poder para de funcionar enquanto Omanyte é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Gun",
            ja: "ウォーターガン",
            fr: "Pistolet à eau",
            de: "Wasserpistole",
            es: "Pistola de agua",
            it: "Pistola ad acqua",
            pt: "Pistola de água",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Water Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "Omanyteに付着した各水エネルギーに対して10ダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Omanyte, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Omanyte befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 10 daños más 10 daños más por cada energía de agua unida a Omanyte, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 10 danni più 10 danni per ogni energia idrica attaccata a Omanyte ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "10 danos mais 10 mais danos para cada energia da água ligada ao Omanyte, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
