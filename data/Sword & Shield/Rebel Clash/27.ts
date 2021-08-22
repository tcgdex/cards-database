import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
				fr: "Flair",
				es: "Rastreo",
				it: "Segugio",
				pt: "Farejador",
				de: "Schnüffler"
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c’est face, ajoutez une carte de votre pile de défausse à votre main.",
				es: "Lanza 1 moneda. Si sale cara, pon 1 carta de tu pila de descartes en tu mano.",
				it: "Lancia una moneta. Se esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Jogue 1 moeda. Se sair cara, coloque 1 carta da sua pilha de descarte na sua mão.",
				de: "Wirf 1 Münze. Nimm bei Kopf 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées",
				es: "Garras de Fuego",
				it: "Artigli Infuocati",
				pt: "Garras de Fogo",
				de: "Feuerkrallen"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes."
	}
}

export default card
