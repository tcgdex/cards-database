import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Unown [J]",
		fr: "Zarbi J"
	},

	illustrator: "Hideki Kazama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Join]",
				fr: "JOIN"
			},
			effect: {
				en: "Once during your turn (before you attack), if you have Unown J, Unown O, Unown I, and Unown N on your Bench, you may search your deck for a Basic Pokémon or Evolution Pokémon card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
				fr: "Une fois durant votre tour (avant votre attaque), si vous avez Zarbi [J], Zarbi [O], Zarbi [I] et Zarbi [N] sur votre Banc, vous pouvez chercher une carte Pokémon de base ou Évolution dans votre deck. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puis Cachee"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. Certains croient qu'il existe un lien entre les hiéroglyphes et eux."
	}
}

export default card
