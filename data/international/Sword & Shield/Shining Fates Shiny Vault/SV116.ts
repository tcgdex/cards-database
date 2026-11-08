import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'fr-fr': "Angoliath V",
		'en-us': "Grimmsnarl V",
		'es-es': "Grimmsnarl V",
		'it-it': "Grimmsnarl V",
		'pt-br': "Grimmsnarl V",
		'de-de': "Olangaar V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Poing Piquant",
			'en-us': "Spiky Knuckle",
			'es-es': "Nudillo Puntiagudo",
			'it-it': "Noccaspina",
			'pt-br': "Punho Espinhoso",
			'de-de': "Stachelfaust"
		},

		effect: {
			'fr-fr': "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
			'en-us': "Put 2 Darkness Energy attached to this Pokémon into your hand.",
			'es-es': "Pon 2 Energías Darkness unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie Darkness assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias Darkness ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte Darkness-Energien auf deine Hand."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539968,
				tcgplayer: 232510
			}
		},
	],
}

export default card
