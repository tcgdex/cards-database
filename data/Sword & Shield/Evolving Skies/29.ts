import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Gyarados VMAX",
		fr: "Léviator VMAX",
		es: "Gyarados VMAX",
		it: "Gyarados VMAX",
		pt: "Gyarados VMAX",
		de: "Garados VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "Shin Nagasawa",

	attacks: [{
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
			es: "Hiperrayo",
			it: "Iper Raggio",
			pt: "Hyper Beam",
			de: "Hyperstrahl"
		},

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Discard an Energy from your opponent's Active Pokémon.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			en: "Max Tyrant",
			fr: "Tyranomax",
			es: "Maxitiránico",
			it: "Dynatiranno",
			pt: "Max Tyrant",
			de: "Dyna-Tyrann"
		},

		damage: 240,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		en: "Gyarados V",
		fr: "Léviator-V",
		es: "Gyarados V",
		it: "Gyarados-V",
		pt: "Gyarados V",
		de: "Garados-V"
	},

	dexId: [130],
	regulationMark: "E",

}

export default card
