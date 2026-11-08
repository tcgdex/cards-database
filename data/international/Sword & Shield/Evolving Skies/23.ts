import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	illustrator: "Hitoshi Ariga",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustion",
			'de-de': "Glühen"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Rip Claw",
			'fr-fr': "Griffe Déchirante",
			'es-es': "Garra Arrebatadora",
			'it-it': "Strappartiglio",
			'pt-br': "Rip Claw",
			'de-de': "Reißklaue"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Discard an Energy from your opponent's Active Pokémon.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	description: {
		'en-us': "The temperature of its breath is over 10,000 degrees Fahrenheit, but Pyroar doesn't use it on its prey. This Pokémon prefers to eat raw meat."
	},

	dexId: [668],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574047,
				tcgplayer: 246841
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574047,
				tcgplayer: 246841
			}
		},
	],
}

export default card
