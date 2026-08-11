import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		519,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Homing Pidove",
				'fr-fr': "Poichigeon Voyageur",
				'es-es': "Pidove Mensajero",
				'it-it': "Pidove Viaggiatore",
				'pt-br': "Pidove Localizador",
				'de-de': "Dusselgurr-Peiler"
			},
			effect: {
				'en-us': "Look at the top card of your deck. Then, you may shuffle your deck.",
				'fr-fr': "Regardez la carte du dessus de votre deck. Ensuite, vous pouvez mélanger votre deck.",
				'es-es': "Mira la primera carta de tu baraja. Después, puedes barajar las cartas de tu baraja.",
				'it-it': "Guarda la carta in cima al tuo mazzo. Poi, puoi rimischiare le carte del tuo mazzo.",
				'pt-br': "Olhe o card de cima do seu baralho. Em seguida, você pode embaralhar seus cards.",
				'de-de': "Schau dir die oberste Karte deines Decks an. Anschließend kannst du dein Deck mischen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
	},

	thirdParty: {
		cardmarket: 282746,
		tcgplayer: 98114
	}
}

export default card
