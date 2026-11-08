import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grimmsnarl V",
		'fr-fr': "Angoliath V",
		'es-es': "Grimmsnarl V",
		'it-it': "Grimmsnarl V",
		'pt-br': "Grimmsnarl V",
		'de-de': "Olangaar V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			'en-us': "Spiky Knuckle",
			'fr-fr': "Poing Piquant",
			'es-es': "Nudillo Puntiagudo",
			'it-it': "Noccaspina",
			'pt-br': "Punho Espinhoso",
			'de-de': "Stachelfaust"
		},

		effect: {
			'en-us': "Put 2 {D} Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main 2 Énergies {D} attachées à ce Pokémon.",
			'es-es': "Pon 2 Energías {D} unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie {D} assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias {D} ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte {D}-Energien auf deine Hand."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [861],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 510190
	}
}

export default card
