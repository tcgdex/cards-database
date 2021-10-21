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
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "nagimiso",

	attacks: [{
		name: {
			en: "Shatter",
			fr: "Fracas",
			es: "Fragmentar",
			it: "Frantumare",
			pt: "Shatter",
			de: "Zertrümmern"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta un Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Discard a Stadium in play.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Slash",
			de: "Schlitzer"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	dexId: [288],

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	description: {
		en: "Its stress level rises if it cannot keep moving constantly. Too much stress makes it feel sick."
	},

	regulationMark: "E"
}

export default card