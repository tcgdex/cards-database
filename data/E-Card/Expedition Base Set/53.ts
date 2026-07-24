import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Meganium",
		de: "Meganie"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [183],

	hp: 50,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Headbutt",
				fr: "Poudre dodo",
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sleepy Ball",
				fr: "Lance-soleil",
				de: "Solarstrahl"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87289,
				cardmarket: 274893
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
