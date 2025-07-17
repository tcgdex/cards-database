import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Vaporeon",
         ja: "Vaporeon",
         fr: "Vaporeon",
         de: "Vaporeon",
         es: "Vaporeón",
         it: "Vaporeon",
         pt: "Vaporeon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [134],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },

        },
        {
          cost: ["Water", "Water", "Colorless"],
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
            en: "Does 30 damage plus 10 more damage for each Water Energy attached to Vaporeon but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
            ja: "Vaporeonに取り付けられた各水エネルギーに対して30のダメージと10のダメージがさらに10件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。 2番目の後の余分な水エネルギーはカウントされません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à Vaporeon mais pas utilisé pour payer le coût énergétique de cette attaque. L'énergie d'eau supplémentaire après le 2e ne compte pas.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede an Vaporeon befestigte Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Zusätzliche Wasserergie nach dem 2. zählt nicht.",
            es: "Hace 30 daños más 10 daños más por cada energía de agua unida a Vaporeon, pero no se usa para pagar el costo de energía de este ataque. Energía de agua adicional después de que el segundo no cuenta.",
            it: "Fa 30 danni più 10 danni per ogni energia idrica attaccata al vaporeone ma non è usato per pagare il costo energetico di questo attacco. L'energia dell'acqua extra dopo il 2 ° non conta.",
            pt: "Os 30 danos mais 10 mais danos para cada energia da água ligados ao Vaporeon, mas não são usados para pagar pelo custo de energia desse ataque. Energia hídrica extra após o 2º não conta.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
