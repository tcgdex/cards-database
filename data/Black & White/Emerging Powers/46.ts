import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
		de: "Mollimorba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deleting Glare",
				fr: "Regard Dépouillant",
				de: "Destruktorblick"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à 1 des Pokémon de votre adversaire.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das gegnerische Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super Psy",
				de: "Super-Psischlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Starlight is the source of their power. At night, they mark star positions by using psychic power to float stones.",
		de: "Zieht seine Energie aus dem Sternenlicht. Bei Nacht bringt es Steine zum Schweben und bildet damit Sternzeichen nach."
	},

	thirdParty: {
		cardmarket: 280010,
		tcgplayer: 85856
	}
}

export default card
