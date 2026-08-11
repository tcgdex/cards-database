import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chip Off",
				'fr-fr': "Grignotement",
				'es-es': "Astillar",
				'it-it': "Rimozione",
				'pt-br': "Tirar Lascas",
				'de-de': "Abspalten"
			},
			effect: {
				'en-us': "Discard cards from your opponent's hand at random until he or she has 4 cards in his or her hand.",
				'fr-fr': "Défaussez des cartes de la main de votre adversaire au hasard jusqu'à ce qu'il ait 4 cartes dans sa main.",
				'es-es': "Descarta cartas de la mano de tu rival al azar hasta que este tenga 4 cartas en su mano.",
				'it-it': "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con quattro carte in mano.",
				'pt-br': "Descarte cards da mão do seu oponente aleatoriamente até ele ou ela ter 4 cards na mão.",
				'de-de': "Lege zufällige Karten aus der verdeckten Hand deines Gegners auf dessen Ablagestapel, bis er 4 Karten auf der Hand hat."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
				'es-es': "Tijera X",
				'it-it': "Forbice X",
				'pt-br': "Tesoura X",
				'de-de': "Kreuzschere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Individuals each play different roles in driving Heatmor, their natural predator, away from their colony.",
	},

	thirdParty: {
		cardmarket: 281544,
		tcgplayer: 91198
	}
}

export default card
