import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'es-es': "Ascuas",
				'it-it': "Braciere",
				'pt-br': "Brasa",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 30,

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
		'en-us': "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},

	thirdParty: {
		cardmarket: 293366,
		tcgplayer: 124022
	}
}

export default card
