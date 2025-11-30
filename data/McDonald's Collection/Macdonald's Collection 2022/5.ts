import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [494],

	hp: 70,

	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				en: "V-Flame",
				fr: "V-Flamme",
				es: "V-Llama",
				it: "V-Fiamma",
				pt: "V-Chama",
				de: "V-Flamme"
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				en: "Fire Spin",
				fr: "Danse Flammes",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Giro de Fogo",
				de: "Feuerwirbel"
			},
			damage: 50,
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

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

