import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 90,

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
		'en-us': "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
	},

	thirdParty: {
		cardmarket: 293367,
		tcgplayer: 124023
	}
}

export default card
