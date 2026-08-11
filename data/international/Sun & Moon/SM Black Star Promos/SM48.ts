import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 150,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras’Terre",
				'es-es': "Aterrizaje",
				'it-it': "Schiacciaterra",
				'pt-br': "Aperto de Terra",
				'de-de': "Schollenbrecher"
			},

			damage: 80,

		},
		{
			cost: [
				"Darkness",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Core Enforcer",
				'fr-fr': "Sanction Suprême",
				'es-es': "Núcleo Castigo",
				'it-it': "Nucleocastigo",
				'pt-br': "Núcleo Executor",
				'de-de': "Sanktionskern"
			},
			effect: {
				'en-us': "Discard a Darkness Energy and a Fairy Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Darkness et une Énergie Fairy de ce Pokémon.",
				'es-es': "Descarta 1 Energía Darkness y 1 Energía Fairy de este Pokémon.",
				'it-it': "Scarta un’Energia Darkness e un’Energia Fairy assegnate a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Darkness e 1 Energia Fairy deste Pokémon.",
				'de-de': "Lege 1 Darkness-Energie sowie 1 Fairy-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,




	description: {
		'en-us': "This is Zygarde's form at times when it uses its overwhelming power to suppress those who endanger the ecosystem.",
	},
}

export default card
