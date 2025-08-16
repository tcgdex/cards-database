import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Phanpy.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Phanpy.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Phanpy zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275175,
		tcgplayer: 87998
	}
}

export default card
