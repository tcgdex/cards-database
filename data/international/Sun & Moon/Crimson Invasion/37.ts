import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pain Amplifier",
				'fr-fr': "Amplificateur de Douleur",
				'es-es': "Amplificador de Dolor",
				'it-it': "Aumentapena",
				'pt-br': "Ampliador da Dor",
				'de-de': "Schmerzverstärker"
			},
			effect: {
				'en-us': "Put 2 damage counters on each of your opponent’s Pokémon that has any damage counters on it.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
				'es-es': "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
				'it-it': "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia dei segnalini danno.",
				'pt-br': "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente que tiver algum contador de dano nele.",
				'de-de': "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
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
		'en-us': "It strikes at humans from total darkness. Those licked by its cold tongue grow weaker with each passing day until they die.",
	},

	thirdParty: {
		cardmarket: 311887,
		tcgplayer: 149060
	}
}

export default card
