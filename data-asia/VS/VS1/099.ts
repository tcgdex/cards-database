import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lance's Aerodactyl",
         ja: "ランスのアエロダクチル",
         fr: "Aérodactyle de Lance",
         de: "Lance's Aerodactyl",
         es: "Lance's Aerodactyl",
         it: "Aerodattilo di Lance",
         pt: "Aerodactyl de Lance",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [142],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Nosedive",
            ja: "ノーシブ",
            fr: "Plongeon",
            de: "Sturzflug",
            es: "Picado vertical",
            it: "Picchiata",
            pt: "Discutido",
          },
          effect: {
            en: "Flip a coin. If tails, Lance's Aerodactyl does 20 damage to itself. (Don’t apply Weakness or Resistance.)",
            ja: "コインをひっくり返します。尾の場合、ランスのアエロダクチルはそれ自体に20の損傷を与えます。 （弱さや抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si Tails, l'aérodactyle de Lance se fait 20 dégâts. (N'appliquez pas la faiblesse ou la résistance.)",
            de: "Eine Münze drehen. Wenn Schwänze, schädigt Lance's Aenodactyl 20 für sich selbst. (Wenden Sie keine Schwäche oder Widerstand an.)",
            es: "Voltea una moneda. Si Tails, Aerodactyl de Lance hace 20 daños a sí mismo. (No aplique debilidad o resistencia).",
            it: "Capovolgi una moneta. Se le code, l'aerodattilo di Lance infligge 20 danni a se stesso. (Non applicare debolezza o resistenza.)",
            pt: "Vire uma moeda. Se a cauda, o aerodáctilo de Lance causar 20 danos a si mesmo. (Não aplique fraqueza ou resistência.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
