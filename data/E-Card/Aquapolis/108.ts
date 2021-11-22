import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		79,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fishing Tail",
				fr: "Queue de pêche"
			},
			effect: {
				en: "Search your discard pile for a Baby Pokémon, Basic Pokémon, Evolution card, or basic Energy card, show it to your opponent, and then put it into your hand.",
				fr: "Cherchez dans votre pile de défausse une carte Bébé Pokémon, Pokémon de base ou Évolution, ou une Carte Énergie de base. Montrez-la à votre adversaire et ajoutez-la ensuite à votre main."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
