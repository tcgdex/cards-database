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
		en: "Ribombee",
		fr: "Rubombelle",
		es: "Ribombee",
		it: "Ribombee",
		pt: "Ribombee",
		de: "Bandelby"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "Saya Tsuruta",

	attacks: [{
		name: {
			en: "Tricky Steps",
			fr: "Pas Délicats",
			es: "Pasos Astutos",
			it: "Passinganno",
			pt: "Tricky Steps",
			de: "Listiges Vorgehen"
		},

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
			it: "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			pt: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			de: "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	description: {
		en: "Ribombee absolutely hate getting wet or rained on. In the cloudy Galar region, they are very seldom seen."
	},

	dexId: [743],
	regulationMark: "E"
}

export default card
