import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [817],
	set: Set,

	name: {
		en: "Drizzile",
		fr: "Arrozard",
		es: "Drizzile",
		it: "Drizzile",
		pt: "Drizzile",
		de: "Phlegleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Sobble",
		fr: "Larméléon",
		es: "Sobble",
		it: "Sobble",
		pt: "Sobble",
		de: "Memmeon"
	},

	attacks: [{
		name: {
			en: "Bounce",
			fr: "Rebond",
			es: "Bote",
			it: "Rimbalzo",
			pt: "Ricochete",
			de: "Sprungfeder"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere."
	},

	thirdParty: {
		cardmarket: 567122
	}
}

export default card
