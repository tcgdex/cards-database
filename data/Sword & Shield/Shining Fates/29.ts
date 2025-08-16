import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [872],
	set: Set,

	name: {
		fr: "Frissonille",
		en: "Snom",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Appel à la Famille",
			en: "Call for Family",
			es: "Llamar a la Familia",
			it: "Cerca Famiglia",
			pt: "Chamar a Família",
			de: "Familienruf"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It spits out thread imbued with a frigid sort of energy and uses it to tie its body to branches, disguising itself as an icicle while it sleeps."
	},

	thirdParty: {
		cardmarket: 539168,
		tcgplayer: 232446
	}
}

export default card