import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Négapi",
		'es-es': "Minun",
		'it-it': "Minun",
		'pt-br': "Minun",
		'de-de': "Minun"
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
				'en-us': "Ditch and Draw",
				'fr-fr': "Défausser et Piocher",
				'es-es': "Descarte y Robo",
				'it-it': "Scarica e Pesca",
				'pt-br': "Dispensar e Comprar",
				'de-de': "Ausmisten"
			},
			effect: {
				'en-us': "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand.",
				'fr-fr': "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				'es-es': "Puedes descartar cualquier cantidad de cartas de tu mano. Después, roba cartas hasta que tengas 5 cartas en tu mano.",
				'it-it': "Puoi scartare un numero qualsiasi di carte che hai in mano. Poi pesca fino ad avere cinque carte in mano.",
				'pt-br': "Você pode descartar qualquer número de cartas da sua mão. Em seguida, compre cartas até ter 5 cartas na sua mão.",
				'de-de': "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe anschließend so lang Karten, bis du 5 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
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

	description: {
		'en-us': "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
	},

	thirdParty: {
		cardmarket: 361300,
		tcgplayer: 170873
	}
}

export default card
