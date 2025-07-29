import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
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
				en: "Land Crush",
				fr: "Écras’Terre",
				es: "Aterrizaje",
				it: "Schiacciaterra",
				pt: "Aperto de Terra",
				de: "Schollenbrecher"
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
				en: "Core Enforcer",
				fr: "Sanction Suprême",
				es: "Núcleo Castigo",
				it: "Nucleocastigo",
				pt: "Núcleo Executor",
				de: "Sanktionskern"
			},
			effect: {
				en: "Discard a Darkness Energy and a Fairy Energy from this Pokémon.",
				fr: "Défaussez une Énergie Darkness et une Énergie Fairy de ce Pokémon.",
				es: "Descarta 1 Energía Darkness y 1 Energía Fairy de este Pokémon.",
				it: "Scarta un’Energia Darkness e un’Energia Fairy assegnate a questo Pokémon.",
				pt: "Descarte 1 Energia Darkness e 1 Energia Fairy deste Pokémon.",
				de: "Lege 1 Darkness-Energie sowie 1 Fairy-Energie von diesem Pokémon auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 299501
	}
}

export default card
