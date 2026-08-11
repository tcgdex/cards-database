import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'en-us': "Indeedee",
		'fr-fr': "Wimessir",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "They diligently serve people and Pokémon so they can gather feelings of gratitude. The females are particularly good at babysitting."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família",
			'it-it': "Cerca Famiglia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Heart Sign",
			'fr-fr': "Signe de Cœur",
			'de-de': "Herzbild",
			'es-es': "Señal Corazón",
			'pt-br': "Sinal de Coração",
			'it-it': "Cuoricino"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582663,
				tcgplayer: 253318
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582663,
				tcgplayer: 253318
			}
		},
	],
}

export default card
