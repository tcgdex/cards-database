import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
				'es-es': "Nitrocarga",
				'it-it': "Nitrocarica",
				'pt-br': "Ataque de Chamas",
				'de-de': "Nitroladung"
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Loop-the-Loop",
				'fr-fr': "Looping",
				'es-es': "Vuelo Invertido",
				'it-it': "Giro della Morte",
				'pt-br': "Looping",
				'de-de': "Looping"
			},
			effect: {
				'en-us': "Put all Energy attached to this Pokémon into your hand.",
				'fr-fr': "Placez toutes les Énergies attachées à ce Pokémon dans votre main.",
				'es-es': "Pon todas las Energías unidas a este Pokémon en tu mano.",
				'it-it': "Metti tutte le Energie assegnate a questo Pokémon nella tua mano.",
				'pt-br': "Coloque todas as Energias ligadas a este Pokémon na sua mão.",
				'de-de': "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand."
			},
			damage: 90,

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

	retreat: 0,

	description: {
		'en-us': "Its favorite foods are Wingull and Pikipek. It attacks with a powerful kick and grasps them firmly in its talons.",
	},

	thirdParty: {
		cardmarket: 297563,
		tcgplayer: 131029
	}
}

export default card
