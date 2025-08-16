import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [752],
	set: Set,

	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		pt: "Dewpider",
		de: "Araqua"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		en: "It acts as a caretaker for Dewpider, putting them inside its bubble and letting them eat any leftover food."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			de: "Käferbiss",
			es: "Picadura",
			pt: "Picada",
			it: "Coleomorso"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Bubble Launch",
			fr: "Bulles Lancées",
			de: "Blasenwurf",
			es: "Lanzamiento Burbuja",
			pt: "Lança-bolhas",
			it: "Lanciabolle"
		},

		damage: 110,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582072,
		tcgplayer: 253105
	}
}

export default card