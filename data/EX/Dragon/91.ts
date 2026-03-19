import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Golem ex",
		fr: "Grolem ex",
		de: "Geowaz ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
				fr: "Ampleur",
				de: "Magnitude"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon du Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Double-edge"
			},
			effect: {
				en: "Golem ex does 50 damage to itself.",
				fr: "Grolem ex s'inflige 50 dégâts.",
				de: "Golem ex does 50 damage to itself."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 5,

	thirdParty: {
		tcgplayer: 85831,
		cardmarket: 275968
	}
}

export default card
