import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "0313",

	attacks: [{
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
			es: "Remolino",
			it: "Turbine",
			pt: "Whirlwind",
			de: "Wirbelwind"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			pt: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [627],

	description: {
		en: "A combative Pokémon, it's ready to pick a fight with anyone. It has talons that can crush hard berries."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574194,
		tcgplayer: 246874
	}
}

export default card
