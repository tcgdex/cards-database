import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 170,

	types: ["Fire"],

	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				en: "Fire Spin",
				fr: "Danse Flammes",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Giro de Fogo",
				de: "Feuerwirbel"
			},
			damage: 150,
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

