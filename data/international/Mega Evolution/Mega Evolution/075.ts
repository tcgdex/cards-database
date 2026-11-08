import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'de-de': "Sonnfel",
		'it-it': "Solrock",
		'es-es': "Solrock",
		'pt-br': "Solrock",
		'es-mx': "Solrock"
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
			'en-us': "Cosmic Beam",
			'fr-fr': "Rayon Cosmique",
			'de-de': "Kosmischer Strahl",
			'it-it': "Cosmoraggio",
			'es-es': "Rayo Cósmico",
			'pt-br': "Feixe Cósmico",
			'es-mx': "Rayo Cósmico"
		},

		effect: {
			'en-us': "If you don't have Lunatone on your Bench, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Si vous n'avez pas Séléroc sur votre Banc, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'de-de': "Wenn Lunastein nicht auf deiner Bank ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			'it-it': "Se non hai Lunatone nella tua panchina, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'es-es': "Si no tienes a Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'pt-br': "Se você não tiver Lunatone no seu Banco, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'es-mx': "Si no tienes Lunatone en tu Banca, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851146,
				tcgplayer: 654414
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851146,
				tcgplayer: 654414
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos",
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		}
	],
}

export default card
