import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		de: "Ignivor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fiery Dance",
				fr: "Danse du Feu",
				de: "Feuerreigen"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
				de: "Lege 1 Basis-Energiekarte von deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Wave",
				fr: "Canicule",
				de: "Hitzewelle"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.",
		de: "Es heißt, als das Land einst unter einer düsteren Wolke aus Vulkanasche lag, übernahm es die Rolle der Sonne."
	},

	thirdParty: {
		cardmarket: 280144,
		tcgplayer: 90402
	}
}

export default card
