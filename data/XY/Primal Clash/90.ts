import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		660,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Ear Dig",
				fr: "Excav'Oreille",
				es: "Excavar con Orejas",
				it: "Fossorecchio",
				pt: "Orelha Escavadeira",
				de: "Ohrschaufel"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la carta in cima al mazzo del tuo avversario.",
				pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte o card de cima do baralho do seu oponente.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
