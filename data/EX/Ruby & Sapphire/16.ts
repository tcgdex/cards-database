import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [286],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		de: "Knilz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Battle Blast",
				fr: "Combat explosif",
				de: "Kampflust"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Breloom.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie {F} attachée à Chapignon.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Kapilz angelegte {F}-Energie zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275664,
				tcgplayer: 83953
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275664,
				tcgplayer: 83953
			}
		},
	],

}

export default card
