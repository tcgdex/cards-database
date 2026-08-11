import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [16],
	set: Set,

	name: {
		'fr-fr': "Roucool",
		'en-us': "Pidgey",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
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
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733611,
				tcgplayer: 502565,
				cardtrader: 261139
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733611,
				tcgplayer: 502565,
				cardtrader: 261139
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
