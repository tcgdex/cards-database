import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		en: "Glimmet",
		fr: "Germéclat",
		es: "Glimmet",
		it: "Glimmet",
		pt: "Glimmet",
		de: "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Shot",
			fr: "Tir Rocheux",
			es: "Disparo Roca",
			it: "Rocciacolpo",
			pt: "Pedrada",
			de: "Felsschuss"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Miki Tanaka"
}

export default card