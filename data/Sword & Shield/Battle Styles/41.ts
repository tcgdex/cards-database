import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Frillish",
		fr: "Viskuse",
		es: "Frillish",
		it: "Frillish",
		pt: "Frillish",
		de: "Quabbel"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Recover",
			fr: "Soin",
			es: "Recuperación",
			it: "Ripresa",
			pt: "Recuperação",
			de: "Genesung"
		},

		effect: {
			en: "Discard an Energy from this Pokémon and heal all damage from it.",
			fr: "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
			it: "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
			pt: "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Legend has it that the residents of a sunken ancient city changed into these Pokémon."
	}
}

export default card
