import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Baltoy",
		fr: "Balbuto de Pierre",
		de: "Troys Puppance",
		it: "Baltoy di Rocco",
		es: "Baltoy de Máximo",
		pt: "Baltoy do Steven",
		'es-mx': "Baltoy de Steven"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Summoning Sign",
			fr: "Signe Invocatoire",
			de: "Beschwörendes Zeichen",
			it: "Segno Evocativo",
			es: "Señal de Invocación",
			pt: "Sinal Invocador",
			'es-mx': "Señal de Invocación"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Steven's Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de Pierre de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Troys-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due Pokémon di Rocco Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja hasta 2 Pokémon de Máximo Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 Pokémon do Steven Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon de Steven Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			de: "Psychosphäre",
			it: "Psicosfera",
			es: "Esfera Psíquica",
			pt: "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
