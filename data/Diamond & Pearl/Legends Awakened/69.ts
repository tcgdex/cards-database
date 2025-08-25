import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		de: "Keifel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
		fr: "Quiekel",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Charge Dash",
				fr: "Attaque précipitée",
				de: "Sturmlauf"
			},
			effect: {
				en: "You may do 30 damage plus 30 more damage. If you do, Piloswine does 30 damage to itself.",
				fr: "Vous pouvez infliger 30 dégâts plus 30 dégâts supplémentaires. Cochignon s'inflige alors 30 dégâts.",
				de: "Du kannst mit diesem Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, fügt Keifel sich selbst 30 Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent glacé",
				de: "Eissturm"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il ne voit rien à cause de sa fourrure touffue et se repère à l'aide de son nez délicat."
	},

	thirdParty: {
		cardmarket: 278218,
		tcgplayer: 88118
	}
}

export default card
