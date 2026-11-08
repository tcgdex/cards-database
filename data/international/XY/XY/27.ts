import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		662,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	stage: "Stage1",

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
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia Fire e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Wing",
				'fr-fr': "Aile de Feu",
				'es-es': "Ala Ígnea",
				'it-it': "Alafiamma",
				'pt-br': "Asa de Fogo",
				'de-de': "Feuerflügel"
			},

			damage: 30,

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
		'en-us': "From its beak, it expels embers that set the tall grass on fire. Then it pounces on the bewildered prey that pop out of the grass.",
	},

	thirdParty: {
		cardmarket: 281364,
		tcgplayer: 85506
	}
}

export default card
