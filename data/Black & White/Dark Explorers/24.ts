import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Airhead",
				fr: "Corniaud",
				es: "Cabeza Hueca",
				it: "Zuccavuota",
				pt: "Cabeça Oca",
				de: "Tagträumerei"
			},
			effect: {
				en: "If you have 2, 4, or 6 Prize cards left, this Pokémon can’t attack.",
				fr: "S’il vous reste 2, 4 ou 6 cartes Récompense, ce Pokémon ne peut pas attaquer.",
				es: "Si te quedan 2, 4 o 6 cartas de Premio, este Pokémon no puede atacar.",
				it: "Se ti rimangono due, quattro o sei carte Premio, questo Pokémon non può attaccare.",
				pt: "Se você possuir 2, 4 ou 6 cards de Prêmio restantes, este Pokémon não poderá atacar.",
				de: "Wenn du 2, 4 oder 6 Preiskarten übrig hast, kann dieses Pokémon nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Lazy Headbutt",
			},
			effect: {
				en: "This Pokémon is now Asleep.",
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

	retreat: 3
}

export default card
