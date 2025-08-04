import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
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
				en: "Chip Off",
				fr: "Grignotement",
				es: "Astillar",
				it: "Rimozione",
				pt: "Tirar Lascas",
				de: "Abspalten"
			},
			effect: {
				en: "Discard cards from your opponent's hand at random until he or she has 4 cards in his or her hand.",
				fr: "Défaussez des cartes de la main de votre adversaire au hasard jusqu'à ce qu'il ait 4 cartes dans sa main.",
				es: "Descarta cartas de la mano de tu rival al azar hasta que este tenga 4 cartas en su mano.",
				it: "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con quattro carte in mano.",
				pt: "Descarte cards da mão do seu oponente aleatoriamente até ele ou ela ter 4 cards na mão.",
				de: "Lege zufällige Karten aus der verdeckten Hand deines Gegners auf dessen Ablagestapel, bis er 4 Karten auf der Hand hat."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				es: "Tijera X",
				it: "Forbice X",
				pt: "Tesoura X",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 281544,
		tcgplayer: 91198
	}
}

export default card
