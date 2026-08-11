import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		'fr-fr': "Famignol",
		'en-us': "Maushold",
		'es-es': "Maushold",
		'it-it': "Maushold",
		'pt-br': "Maushold",
		'de-de': "Famieps"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Compagnol",
		'en-us': "Tandemaus",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Gifle Douce",
			'en-us': "Gentle Slap",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Rongement Incessant",
			'en-us': "Gnaw Relentlessly",
			'es-es': "Roer sin Parar",
			'it-it': "Rosicchiamento Incessante",
			'pt-br': "Roída Incessante",
			'de-de': "Unerbittliches Nagen"
		},

		effect: {
			'fr-fr': "Placez un marqueur de dégâts sur chacun des Pokémon de votre adversaire pour chacun de vos Famignol en jeu.",
			'en-us': "Put 1 damage counter on each of your opponent's Pokémon for each of your Maushold in play.",
			'es-es': "Pon 1 contador de daño en cada uno de los Pokémon de tu rival por cada uno de tus Maushold en juego.",
			'it-it': "Metti un segnalino danno su ciascuno dei Pokémon del tuo avversario per ogni tuo Maushold in gioco.",
			'pt-br': "Coloque 1 contador de dano em cada um dos Pokémon do seu oponente para cada um dos seus Maushold em jogo.",
			'de-de': "Lege für jedes deiner Famieps im Spiel 1 Schadensmarke auf jedes Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715643,
				tcgplayer: 497588,
				cardtrader: 248824
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715643,
				tcgplayer: 497588,
				cardtrader: 248824
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "They build huge nests with many rooms that are used for different purposes, such as eating and sleeping.",
	},
}

export default card
