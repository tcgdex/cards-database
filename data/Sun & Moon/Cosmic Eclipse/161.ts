import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
		es: "Jangmo-o",
		it: "Jangmo-o",
		pt: "Jangmo-o",
		de: "Miniras"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dragon Headbutt",
				fr: "Dracoud’Boule",
				es: "Cabezazo Dragón",
				it: "Dragozuccata",
				pt: "Cabeçada do Dragão",
				de: "Drachen-Kopfnuss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408429,
		tcgplayer: 201282
	}
}

export default card
