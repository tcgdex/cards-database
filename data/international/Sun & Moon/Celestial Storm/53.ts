import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
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
				'en-us': "Draw for Everybody",
				'fr-fr': "Pioche Pour Tous",
				'es-es': "Robo por Todos",
				'it-it': "Pesca Comunitaria",
				'pt-br': "Compra Geral",
				'de-de': "Ziehen für alle"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent’s).",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada Pokémon no Banco (seus e do seu oponente).",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jedes Pokémon auf der Bank (deiner und der deines Gegners)."
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
		'en-us': "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises.",
	},

	thirdParty: {
		cardmarket: 361299,
		tcgplayer: 170872
	}
}

export default card
