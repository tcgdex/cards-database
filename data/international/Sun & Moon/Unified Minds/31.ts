import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		662,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
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
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It scatters embers in the tall grass. Then bug Pokémon, frightened by the flames, come flying out, and Fletchinder gobbles them up.",
	},

	thirdParty: {
		cardmarket: 387987,
		tcgplayer: 194949
	}
}

export default card
