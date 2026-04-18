import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas",
		de: "Boreos",
		it: "Tornadus",
		es: "Tornadus",
		pt: "Tornadus"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [641],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wrapped in Wind",
			fr: "Enveloppement Éolien",
			de: "Windhülle",
			it: "Ventavvolto",
			es: "Envuelto en Viento",
			pt: "Embrulhado no Vento"
	},

		effect: {
			en: "Attach a Basic Energy card from your hand to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			es: "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			pt: "Ligue uma carta de Energia Básica da sua mão a este Pokémon."
	}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hurricane",
			fr: "Vent Violent",
			de: "Orkan",
			it: "Tifone",
			es: "Vendaval",
			pt: "Furacão"
	},

		effect: {
			en: "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Basis-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia base da questo Pokémon a uno di quelli nella tua panchina.",
			es: "Mueve 1 Energía Básica de este Pokémon a uno de tus Pokémon en Banca.",
			pt: "Mova uma Energia Básica deste Pokémon para 1 dos seus Pokémon no Banco."
	},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836656,
		tcgplayer: 644835
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	],
}

export default card
