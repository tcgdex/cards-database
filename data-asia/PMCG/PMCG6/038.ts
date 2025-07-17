import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Golduck",
         ja: "サブリナのゴルダック",
         fr: "Golduck de Sabrina",
         de: "Sabrinas Golduck",
         es: "Golduck de Sabrina",
         it: "Sabrina's Golduck",
         pt: "O Golduck de Sabrina",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Damage Shift",
            ja: "ダメージシフト",
            fr: "Changement de dégâts",
            de: "Schadensverschiebung",
            es: "Cambio de daño",
            it: "Spostamento del danno",
            pt: "Mudança de dano",
          },
          effect: {
            en: "Move 1 damage counter from each of your Pokemon that has any on it to the Defending Pokemon. (Don't apply Weakness and Resistance.)",
            ja: "ポケモンのそれぞれからディフェンディングポケモンに1つのダメージカウンターを移動します。 （弱さや抵抗を適用しないでください。）",
            fr: "Déplacez 1 compteur de dégâts de chacun de vos Pokémon qui en contient au Pokémon en défense. (N'appliquez pas la faiblesse et la résistance.)",
            de: "Bewegen Sie 1 Schadenschalter von jedem Ihrer Pokémon, das irgendwelche auf das verteidigende Pokémon aufweist. (Wenden Sie keine Schwäche und Widerstand an.)",
            es: "Mueva 1 contador de daño de cada uno de sus Pokémon que tiene alguno para el Pokémon defensor. (No aplique debilidad y resistencia).",
            it: "Sposta 1 contatore di danni da ciascuno dei tuoi Pokemon che ne ha sul Pokemon in difesa. (Non applicare debolezza e resistenza.)",
            pt: "Mova 1 contador de danos de cada um dos seus Pokémon que possui algum para o Pokémon defensivo. (Não aplique fraqueza e resistência.)",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Water Spray",
            ja: "水スプレー",
            fr: "Pulvérisation",
            de: "Wasserspray",
            es: "Pulverización de agua",
            it: "Spray d'acqua",
            pt: "Spray de água",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },
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
