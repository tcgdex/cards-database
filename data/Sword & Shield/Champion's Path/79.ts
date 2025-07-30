import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [6],

	name: {
		en: "Charizard V",
		fr: "Dracaufeu V",
		es: "Charizard V",
		it: "Charizard V",
		pt: "Charizard V",
		de: "Glurak V"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch'Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danse Flammes",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Chama Furacão",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 500225,
		tcgplayer: 223078
	}
}

export default card
