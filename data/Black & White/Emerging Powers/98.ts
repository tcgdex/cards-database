import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Tornadus",
		fr: "Boréas",
		es: "Tornadus",
		it: "Tornadus",
		pt: "Tornadus",
		de: "Boreos"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 110,

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
				en: "Energy Wheel",
				fr: "Roue d'Énergie",
				de: "Energierad"
			},
			effect: {
				en: "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
				fr: "Déplacez une Énergie de l'un de vos Pokémon de Banc vers ce Pokémon.",
				de: "Verschiebe 1 an 1 Pokémon auf deiner Bank angelegte Energie auf dieses Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane",
				fr: "Vent Violent",
				de: "Orkan"
			},
			effect: {
				en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de base de ce Pokémon vers 1 de vos Pokémon de Banc.",
				de: "Verschiebe 1 an dieses Pokémon angelegte Basis-Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
		de: "Sein Unterkörper ist in eine wolkenartige Energieschicht gehüllt. Es jagt mit bis zu 300 km/h durch die Lüfte."
	},

	thirdParty: {
		cardmarket: 280054,
		tcgplayer: 89977
	}
}

export default card
