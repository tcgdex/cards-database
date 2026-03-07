import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		'es-mx': "Solrock",
		de: "Sonnfel",
		it: "Solrock",
		pt: "Solrock"
	},

	illustrator: "Whisker",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [338],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Cosmic Beam",
			fr: "Rayon Cosmique",
			es: "Rayo Cósmico",
			'es-mx': "Rayo Cósmico",
			de: "Kosmischer Strahl",
			it: "Cosmoraggio",
			pt: "Feixe Cósmico"
		},

		effect: {
			en: "If you don't have Lunatone on your Bench, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Si vous n'avez pas Séléroc sur votre Banc, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "Si no tienes a Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Si no tienes Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			de: "Wenn Lunastein nicht auf deiner Bank ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			it: "Se non hai Lunatone nella tua panchina, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Se você não tiver Lunatone no seu Banco, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza ou Resistência."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869717,
			tcgplayer: 675918
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869717,
			tcgplayer: 675918
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870307,
			tcgplayer: 676938
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870308,
			tcgplayer: 677078
		}
	},
],
}

export default card