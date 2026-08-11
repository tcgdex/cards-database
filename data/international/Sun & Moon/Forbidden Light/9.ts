import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
		'es-es': "Skiddo",
		'it-it': "Skiddo",
		'pt-br': "Skiddo",
		'de-de': "Mähikel"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		672,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'es-es': "Desarrollo",
				'it-it': "Crescita",
				'pt-br': "Crescimento",
				'de-de': "Wachstum"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Grass de votre main à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Grass de tu mano a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Grass dalla tua mano.",
				'pt-br': "Ligue 1 carta de Energia Grass da sua mão a este Pokémon.",
				'de-de': "Lege1 Grass-Energiekarte aus deiner Hand an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it has sunshine and water, it doesn't need to eat, because it can generate energy from the leaves on its back.",
	},

	thirdParty: {
		cardmarket: 355530,
		tcgplayer: 165656
	}
}

export default card
