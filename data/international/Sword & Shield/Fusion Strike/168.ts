import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [568],
	set: Set,

	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		'en-us': "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família",
			'it-it': "Cerca Famiglia"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Super Poison Breath",
			'fr-fr': "Super Haleine Empoisonnée",
			'de-de': "Super-Gifthauch",
			'es-es': "Aliento Supervenenoso",
			'pt-br': "Super-hálito Venenoso",
			'it-it': "Super Velenospiro"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582796,
				tcgplayer: 253382
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582796,
				tcgplayer: 253382
			}
		},
	],
}

export default card
