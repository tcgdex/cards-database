import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
		de: "Regigigas"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		fr: "Regigigas",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Regi Form",
				fr: "Regi forme",
				de: "Regi-Form"
			},
			effect: {
				en: "If you have Regirock, Regice, and Registeel in play, the attack cost of Regigigas's attacks is Colorless less.",
				fr: "Si vous avez Regirock, Regice et Registeel en jeu, le Coût d'attaque des attaques de Regigigas est Colorless de moins.",
				de: "Wenn du Regirock, Regice und Registeel im Spiel hast, kosten Regigigas' Angriffe 1  weniger."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				de: "Megahieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Power",
				fr: "Giga pouvoir",
				de: "Gigakraft"
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Regigigas does 40 damage to itself.",
				fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Regigigas s'inflige alors 40 dégâts.",
				de: "Du kannst mit diesem Angriff 60 Schadenspunkte plus 40 weitere Schadenspunkte zufügen. Wenn du das machst, fügt Regigigas sich selbst 40 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278307
	}
}

export default card
