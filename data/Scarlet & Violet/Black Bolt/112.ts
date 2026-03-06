import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [587],
	set: Set,

	name: {
		en: "Emolga",
		fr: "Emolga",
		de: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		es: "Emolga",
		'es-mx': "Emolga"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			de: "Familienruf",
			it: "Cerca Famiglia",
			pt: "Chamar a Família",
			es: "Llamar a la Familia",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			it: "Shock Statico",
			pt: "Choque de Estática",
			es: "Impacto Estático",
			'es-mx': "Impacto Estático"
		},

		damage: 20
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836132
	}
}

export default card