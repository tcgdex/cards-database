import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		'es-mx': "Mawile",
		de: "Flunkifer",
		it: "Mawile",
		pt: "Mawile"
	},

	illustrator: "sowsow",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			es: "Llamar a la Familia",
			'es-mx': "Llamar a la Familia",
			de: "Familienruf",
			it: "Cerca Famiglia",
			pt: "Chamar a Família"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 676058,
		cardmarket: 869857
	}
}

export default card
