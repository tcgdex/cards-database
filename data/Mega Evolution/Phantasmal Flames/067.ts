import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		'es-mx': "Toxel",
		de: "Toxel",
		it: "Toxel",
		pt: "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

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
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			es: "Patada Juguetona",
			'es-mx': "Patada Juguetona",
			de: "Verspielter Kick",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card