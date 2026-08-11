import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [828],

	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'es-es': "Maquinación",
				'it-it': "Congiura",
				'pt-br': "Trama Maldosa",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
				'es-es': "Colmillo Afilado",
				'it-it': "Zannaffilata",
				'pt-br': "Presa Afiada",
				'de-de': "Scharfe Fänge"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483444,
				tcgplayer: 219427
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483444,
				tcgplayer: 219427
			}
		},
	],
}

export default card
