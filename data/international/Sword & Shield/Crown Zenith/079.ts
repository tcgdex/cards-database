import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [552],
	set: Set,

	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dredge Up",
			'fr-fr': "Extraction",
			'es-es': "Ventilar",
			'it-it': "Dragaggio",
			'pt-br': "Dragar",
			'de-de': "Ausbaggern"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 3 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime tre carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 3 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "D",


	description: {
		'en-us': "It buries some of its prey in the sand to use as emergency meals when its hunts are unsuccessful.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691797,
				tcgplayer: 478218
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691797,
				tcgplayer: 478218
			}
		},
	],
}

export default card
