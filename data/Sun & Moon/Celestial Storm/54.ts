import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
		es: "Minun",
		it: "Minun",
		pt: "Minun",
		de: "Minun"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ditch and Draw",
				fr: "Défausser et Piocher",
				es: "Descarte y Robo",
				it: "Scarica e Pesca",
				pt: "Dispensar e Comprar",
				de: "Ausmisten"
			},
			effect: {
				en: "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand.",
				fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				es: "Puedes descartar cualquier cantidad de cartas de tu mano. Después, roba cartas hasta que tengas 5 cartas en tu mano.",
				it: "Puoi scartare un numero qualsiasi di carte che hai in mano. Poi pesca fino ad avere cinque carte in mano.",
				pt: "Você pode descartar qualquer número de cartas da sua mão. Em seguida, compre cartas até ter 5 cartas na sua mão.",
				de: "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe anschließend so lang Karten, bis du 5 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},

			damage: 30,

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

	thirdParty: {
		cardmarket: 361300,
		tcgplayer: 170873
	}
}

export default card
