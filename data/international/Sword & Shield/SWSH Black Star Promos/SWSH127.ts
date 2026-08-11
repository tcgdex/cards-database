import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		'en-us': "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	stage: "Basic",

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	rarity: "Promo",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Be Prepared",
			'fr-fr': "Prêt à Tout",
			'de-de': "Vorbereitungen treffen",
			'es-es': "Prepárate",
			'pt-br': "Planejamento",
			'it-it': "Pronti a Tutto"
		},

		effect: {
			'en-us': "Attach a basic Energy card from your hand to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia básica da sua mão a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 491204
	}
}

export default card
