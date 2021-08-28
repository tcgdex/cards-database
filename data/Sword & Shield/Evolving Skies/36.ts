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
		en: "Sharpedo",
		fr: "Sharpedo",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo",
		de: "Tohaido"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kazuma Koda",

	attacks: [{
		name: {
			en: "Taunt",
			fr: "Provoc",
			es: "Mofa",
			it: "Provocazione",
			pt: "Taunt",
			de: "Verhöhner"
		},

		effect: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Jet Bite",
			fr: "Impact Mordant",
			es: "Turbomordisco",
			it: "Morso Jet",
			pt: "Jet Bite",
			de: "Rasanter Biss"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "During your next turn, this Pokémon can’t attack.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card