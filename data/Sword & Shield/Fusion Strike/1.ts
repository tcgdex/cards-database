import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flock",
			fr: "Nuée",
			de: "Ausschwärmen",
			es: "Multitud",
			pt: "Bando",
			it: "Frotta"
		},

		effect: {
			en: "Search your deck for a Caterpie and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Chenipan, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Raupy und lege es auf deine Bank. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 Caterpie y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 Caterpie no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo un Caterpie e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			de: "Käferbiss",
			es: "Picadura",
			pt: "Picada",
			it: "Coleomorso"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582029,
		tcgplayer: 253069
	}
}

export default card