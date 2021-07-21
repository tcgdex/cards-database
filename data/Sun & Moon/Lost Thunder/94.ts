import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		es: "Girafarig",
		it: "Girafarig",
		pt: "Girafarig",
		de: "Girafarig"
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
				en: "Get Lost",
				fr: "C’est Perdu",
				es: "Perderse",
				it: "Destinazione Perduta",
				pt: "Perder-se",
				de: "Nirgendwo-Abgang"
			},
			effect: {
				en: "Put 2 cards from your opponent’s discard pile in the Lost Zone.",
				fr: "Placez 2 cartes de la pile de défausse de votre adversaire dans la Zone Perdue.",
				es: "Pon 2 cartas de la pila de descartes de tu rival en la Zona Perdida.",
				it: "Prendi due carte dalla pila degli scarti del tuo avversario e mettile nell’area perduta.",
				pt: "Coloque 2 cartas da pilha de descarte do seu oponente na Zona Perdida.",
				de: "Lege 2 Karten aus dem Ablagestapel deines Gegners ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc Cérébral",
				es: "Choque Cerebral",
				it: "Shock Mentale",
				pt: "Choque Mental",
				de: "Verstandesschock"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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



}

export default card
