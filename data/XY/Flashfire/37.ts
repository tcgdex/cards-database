import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		695,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Parabolic Charge",
				fr: "Parabocharge",
				es: "Carga Parábola",
				it: "Caricaparabola",
				pt: "Ataque Parabólico",
				de: "Parabolladung"
			},
			effect: {
				en: "Search your deck for up to 2 Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes Énergie dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due carte Energia, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure no seu baralho até 2 cards de Energia, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				es: "Ataque Rápido",
				it: "Attacco Rapido",
				pt: "Ataque Rápido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
