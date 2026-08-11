import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Make ’Em Pay",
				'fr-fr': "Ça Va Payer",
				'es-es': "Ajuste de Cuentas",
				'it-it': "Pareggio dei Conti",
				'pt-br': "Vai Ver Só",
				'de-de': "Lass sie büßen"
			},
			effect: {
				'en-us': "If your opponent has 4 or more cards in their hand, they reveal their hand. Discard cards you find there until your opponent has exactly 4 cards in their hand.",
				'fr-fr': "Si votre adversaire a 4 cartes ou plus dans sa main, il montre sa main. Défaussez des cartes que vous y trouvez jusqu’à ce qu’il reste exactement 4 cartes dans la main de votre adversaire.",
				'es-es': "Si tu rival tiene 4 o más cartas en su mano, este enseña las cartas de su mano. Descarta cartas que encuentres entre ellas hasta que tu rival tenga exactamente 4 cartas en su mano.",
				'it-it': "Se ha quattro o più carte in mano, il tuo avversario mostra la sua mano. Scarta delle carte dalla sua mano finché ne ha esattamente quattro.",
				'pt-br': "Seu oponente revelará a própria mão se tiver 4 ou mais cartas nela. Descarte as cartas que encontrar lá até seu oponente ter exatamente 4 cartas na mão dele(a).",
				'de-de': "Wenn dein Gegner 4 oder mehr Karten auf seiner Hand hat, zeigt er dir seine Handkarten. Lege so lang Karten, die du dort findest, auf seinen Ablagestapel, bis er genau 4 Karten auf seiner Hand hat."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Claws",
				'fr-fr': "Griffes Affûtées",
				'es-es': "Garras Afiladas",
				'it-it': "Artigli Affilati",
				'pt-br': "Garras Cortantes",
				'de-de': "Scharfe Krallen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although the jewel on its forehead appears to be a different color than those of Alolan Persian, it's mostly made of the same material.",
	},

	thirdParty: {
		cardmarket: 369053,
		tcgplayer: 183915
	}
}

export default card
