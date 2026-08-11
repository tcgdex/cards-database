import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [338],
	set: Set,

	name: {
		'fr-fr': "Solaroc",
		'en-us': "Solrock",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Appel à la Famille",
			'en-us': "Call for Family",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'de-de': "Familienruf"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Lance-Soleil",
			'en-us': "Solar Beam",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 50
	}],

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
	regulationMark: "G",

	description: {
		'en-us': "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725173,
				tcgplayer: 509872,
				cardtrader: 255778
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725173,
				tcgplayer: 509872,
				cardtrader: 255778
			}
		},
	],

	illustrator: "Tetsu Kayama",

	
}

export default card
