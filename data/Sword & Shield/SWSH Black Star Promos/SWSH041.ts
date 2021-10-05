import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "You Iribi",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	attacks: [{
		name: {
			en: "Singe",
			fr: "Roussi",
			es: "Quemadura",
			pt: "Singe",
			de: "Versengung"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "Your opponent’s Active Pokémon is now Burned.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Kindle",
			fr: "Enflammer",
			es: "Encendido",
			pt: "Kindle",
			de: "Anzünden"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit."
	},

	stage: "Stage1",
	dexId: [136],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card