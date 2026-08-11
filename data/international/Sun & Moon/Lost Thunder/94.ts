import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Get Lost",
				'fr-fr': "C’est Perdu",
				'es-es': "Perderse",
				'it-it': "Destinazione Perduta",
				'pt-br': "Perder-se",
				'de-de': "Nirgendwo-Abgang"
			},
			effect: {
				'en-us': "Put 2 cards from your opponent’s discard pile in the Lost Zone.",
				'fr-fr': "Placez 2 cartes de la pile de défausse de votre adversaire dans la Zone Perdue.",
				'es-es': "Pon 2 cartas de la pila de descartes de tu rival en la Zona Perdida.",
				'it-it': "Prendi due carte dalla pila degli scarti del tuo avversario e mettile nell’area perduta.",
				'pt-br': "Coloque 2 cartas da pilha de descarte do seu oponente na Zona Perdida.",
				'de-de': "Lege 2 Karten aus dem Ablagestapel deines Gegners ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc Cérébral",
				'es-es': "Choque Cerebral",
				'it-it': "Shock Mentale",
				'pt-br': "Choque Mental",
				'de-de': "Verstandesschock"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tail has a small brain of its own. Beware! If you get close, it may react to your scent by biting.",
	},

	thirdParty: {
		cardmarket: 365731,
		tcgplayer: 178905
	}
}

export default card
