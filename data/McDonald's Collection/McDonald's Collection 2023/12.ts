import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 130,

	types: ["Colorless"],

	stage: "Stage2",

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
				es: "Bofetada Gentil",
				it: "Schiaffetto",
				pt: "Tapinha",
				de: "Sanfter Hieb"
			},
			damage: 50,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Blissful Egg",
				fr: "Œuf Bienheureux",
				es: "Huevo Feliz",
				it: "Uovo Beato",
				pt: "Ovo Abençoado",
				de: "Segensreiches Ei"
			},
			damage: 80,
			effect: {
				en: "Heal 60 damage from this Pokémon.",
				fr: "Soignez 60 dégâts de ce Pokémon.",
				es: "Cura 60 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 60 danni.",
				pt: "Cure 60 pontos de dano deste Pokémon.",
				de: "Heile 60 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
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

