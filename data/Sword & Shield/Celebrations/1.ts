import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		es: "Ho-Oh",
		it: "Ho-Oh",
		pt: "Ho-Oh",
		de: "Ho-Oh"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			en: "Sacred Fire",
			fr: "Feu Sacré",
			es: "Fuego Sagrado",
			it: "Magifuoco",
			pt: "Fogo Sagrado",
			de: "Läuterfeuer"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			es: "Llamarada",
			it: "Fuocobomba",
			pt: "Rajada de Fogo",
			de: "Feuersturm"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		en: "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings."
	},

	dexId: [250],

	thirdParty: {
		cardmarket: 576746,
		tcgplayer: 250300
	}
}

export default card
