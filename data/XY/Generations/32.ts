import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spacing Out",
				fr: "Trou d'Mémoire",
				de: "Dahindöser"
			},
			effect: {
				en: "Flip a coin. If heads, heal 10 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, soignez 10 dégâts à ce Pokémon.",
				de: "Wirf 1 Münze. Heile bei „Kopf“ 10 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Scavenge",
				fr: "Farfouille",
				de: "Aasfresser"
			},
			effect: {
				en: "Discard a Psychic Energy attached to this Pokémon. If you do, put an Item card from your discard pile into your hand.",
				fr: "Défaussez une Énergie Psychic attachée à ce Pokémon. Dans ce cas, prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
				de: "Lege 1 an dieses Pokémon angelegte {P}-Energie auf deinen Ablagestapel. Wenn du das machst, nimm 1 Itemkarte von deinem Ablagestapel auf deine Hand."
			},

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
		en: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
		de: "Es ist stets in Gedanken versunken und niemand weiß, worüber es nachdenkt. Es kann mit seiner Rute gut angeln."
	},

	thirdParty: {
		cardmarket: 288470,
		tcgplayer: 113690
	}
}

export default card
