import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		it: "Diggersby",
		pt: "Diggersby",
		de: "Grebbit"
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		660,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountaintop Mining",
				fr: "Mine des Sommets",
				es: "Minería Cima",
				it: "Miniera di Montagna",
				pt: "Mineração Montanhosa",
				de: "Gipfelabbau"
			},
			effect: {
				en: "You may do 40 more damage. If you do, discard the top 2 cards of your deck.",
				fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
				es: "Puedes hacer 40 puntos de daño más. Si lo haces, descarta las 2 primeras cartas de tu baraja.",
				it: "Puoi infliggere 40 danni in più. Se lo fai, scarta le prime due carte del tuo mazzo.",
				pt: "Você pode causar 40 pontos de dano a mais. Se fizer isto, descarte as 2 primeiras cartas do seu baralho.",
				de: "Du kannst 40 Schadenspunkte mehr zufügen. Wenn du das machst, lege die obersten 2 Karten von deinem Deck auf deinen Ablagestapel."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Cannon",
				fr: "Canon à Pierres",
				es: "Cañón Roca",
				it: "Rocciocannone",
				pt: "Canhão de Rochas",
				de: "Felskanone"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
