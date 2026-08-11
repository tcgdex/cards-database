import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'it-it': "Butterfree",
		'pt-br': "Butterfree",
		'de-de': "Smettbo"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Quiver Dance",
				'fr-fr': "Papillodanse",
				'es-es': "Danza Aleteo",
				'it-it': "Eledanza",
				'pt-br': "Dança Vibratória",
				'de-de': "Falterreigen"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, heal 40 damage from this Pokémon.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, soignez 40 dégâts à ce Pokémon.",
				'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después. Si has unido Energía de esta manera, cura 40 puntos de daño a este Pokémon.",
				'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo. Se assegni Energia in questo modo, cura questo Pokémon da 40 danni.",
				'pt-br': "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards. Se você ligou Energia dessa forma, cure 40 de danos deste Pokémon.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck. Falls du auf diese Weise Energie angelegt hast, heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
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

			damage: 70,

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
		'en-us': "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
	},

	thirdParty: {
		cardmarket: 281486,
		tcgplayer: 91136
	}
}

export default card
