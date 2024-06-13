import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [166],
	set: Set,

	name: {
		en: "Ledian",
		fr: "Coxyclaque",
		es: "Ledian",
		it: "Ledian",
		pt: "Ledian",
		de: "Ledian"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Ledyba",
		fr: "Coxy",
		es: "Ledyba",
		it: "Ledyba",
		pt: "Ledyba",
		de: "Ledyba"
	},

	attacks: [{
		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			it: "Pescalesto",
			pt: "Retirada Rápida",
			de: "Schnellzieher"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
			es: "Tajo Aéreo",
			it: "Eterelama",
			pt: "Golpe de Ar",
			de: "Luftschnitt"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
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
		en: "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you."
	}
}

export default card
