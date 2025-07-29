import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
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
		en: "Meowth",
		fr: "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Make ’Em Pay",
				fr: "Ça Va Payer",
				es: "Ajuste de Cuentas",
				it: "Pareggio dei Conti",
				pt: "Vai Ver Só",
				de: "Lass sie büßen"
			},
			effect: {
				en: "If your opponent has 4 or more cards in their hand, they reveal their hand. Discard cards you find there until your opponent has exactly 4 cards in their hand.",
				fr: "Si votre adversaire a 4 cartes ou plus dans sa main, il montre sa main. Défaussez des cartes que vous y trouvez jusqu’à ce qu’il reste exactement 4 cartes dans la main de votre adversaire.",
				es: "Si tu rival tiene 4 o más cartas en su mano, este enseña las cartas de su mano. Descarta cartas que encuentres entre ellas hasta que tu rival tenga exactamente 4 cartas en su mano.",
				it: "Se ha quattro o più carte in mano, il tuo avversario mostra la sua mano. Scarta delle carte dalla sua mano finché ne ha esattamente quattro.",
				pt: "Seu oponente revelará a própria mão se tiver 4 ou mais cartas nela. Descarte as cartas que encontrar lá até seu oponente ter exatamente 4 cartas na mão dele(a).",
				de: "Wenn dein Gegner 4 oder mehr Karten auf seiner Hand hat, zeigt er dir seine Handkarten. Lege so lang Karten, die du dort findest, auf seinen Ablagestapel, bis er genau 4 Karten auf seiner Hand hat."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Claws",
				fr: "Griffes Affûtées",
				es: "Garras Afiladas",
				it: "Artigli Affilati",
				pt: "Garras Cortantes",
				de: "Scharfe Krallen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 369053
	}
}

export default card
