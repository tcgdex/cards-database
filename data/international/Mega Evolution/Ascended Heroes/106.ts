import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'es-mx': "Solrock",
		'de-de': "Sonnfel",
		'it-it': "Solrock",
		'pt-br': "Solrock"
	},

	illustrator: "Whisker",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [338],
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Cosmic Beam",
			'fr-fr': "Rayon Cosmique",
			'es-es': "Rayo Cósmico",
			'es-mx': "Rayo Cósmico",
			'de-de': "Kosmischer Strahl",
			'it-it': "Cosmoraggio",
			'pt-br': "Feixe Cósmico"
		},

		effect: {
			'en-us': "If you don't have Lunatone on your Bench, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Si vous n'avez pas Séléroc sur votre Banc, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'es-es': "Si no tienes a Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Si no tienes Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'de-de': "Wenn Lunastein nicht auf deiner Bank ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			'it-it': "Se non hai Lunatone nella tua panchina, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "Se você não tiver Lunatone no seu Banco, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza ou Resistência."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
	},

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
		foil: "duskball",
		thirdParty: {
			cardmarket: 870308,
			tcgplayer: 676938
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870307,
			tcgplayer: 677078
		}
	},
],
}

export default card
