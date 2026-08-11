import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [633],
	set: Set,

	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Stomp Off",
			'fr-fr': "Tohu-Bohu",
			'es-es': "Pisotear",
			'it-it': "Pestatura",
			'pt-br': "Sair Irritado",
			'de-de': "Davonstapfen"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794457,
				tcgplayer: 589916
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794457,
				tcgplayer: 589916
			}
		},
	],

	illustrator: "YASHIRO Nanaco",

}

export default card
