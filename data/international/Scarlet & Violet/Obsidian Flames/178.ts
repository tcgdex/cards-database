import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'fr-fr': "Rongourmand",
		'en-us': "Skwovet",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Bouchée Dérobée",
			'en-us': "Nicked Nibble",
			'es-es': "Mordisquito a Hurtadillas",
			'it-it': "Sgraffigna Boccone",
			'pt-br': "Lambiscar",
			'de-de': "Anknabbern"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Gifle Douce",
			'en-us': "Gentle Slap",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It stores berries in its cheeks. When there are no berries to be found, Skwovet will stuff pebbles into its cheeks to stave off its cravings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725258,
				tcgplayer: 509732,
				cardtrader: 256074
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725258,
				tcgplayer: 509732,
				cardtrader: 256074
			}
		},
	],

	illustrator: "Taiga Kayama",

	
}

export default card
