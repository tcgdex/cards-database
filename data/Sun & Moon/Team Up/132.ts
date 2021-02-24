import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Head Hunt",
				fr: "Chasseur de Têtes",
			},
			effect: {
				en: "Look at the top 6 cards of your deck, reveal any number of Pokémon you find there, and put them into your hand. Discard the other cards.",
				fr: "Regardez les 6 cartes du dessus de votre deck, montrez autant de Pokémon trouvés que vous voulez, puis ajoutez-les à votre main. Défaussez les autres cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
