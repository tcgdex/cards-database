import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode",
         ja: "電極",
         fr: "Électrode",
         de: "Elektrode",
         es: "Electrodo",
         it: "Elettrodo",
         pt: "Eletrodo",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [101],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Pächtern, Poké-Körpern oder anderen Auswirkungen auf das verteidigende Pokémon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poké-powers, corpos de poké ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mass Destruction",
            ja: "大量破壊",
            fr: "Destruction massive",
            de: "Massenvernichtung",
            es: "Destrucción masiva",
            it: "Distruzione di massa",
            pt: "Destruição em massa",
          },
          effect: {
            en: "Both Electrode and the Defending Pokemon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
            ja: "電極と防御ポケモンの両方がノックアウトされました。電極に特別なエネルギーカードが添付されている場合、この攻撃は何もしません。",
            fr: "L'électrode et le Pokémon en défense sont maintenant éliminés. Si l'électrode a des cartes d'énergie spéciales qui y sont attachées, cette attaque ne fait rien.",
            de: "Sowohl die Elektrode als auch das verteidigende Pokémon werden jetzt ausgeschlagen. Wenn Elektrode spezielle Energiekarten miteinander befindet, tut dieser Angriff nichts.",
            es: "Tanto el electrodo como el pokemon defensor ahora están noqueados. Si el electrodo tiene alguna carta de energía especial unida, este ataque no hace nada.",
            it: "Sia l'elettrodo che il Pokemon in carica sono ora eliminati. Se l'elettrodo ha schede energetiche speciali ad esso collegate, questo attacco non fa nulla.",
            pt: "O eletrodo e o Pokémon defensivo agora são nocauteados. Se o eletrodo tiver algum cartão de energia especial anexado a ele, esse ataque não fará nada.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
