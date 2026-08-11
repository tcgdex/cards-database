import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'en-us': "Eevee"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Prêt à Tout",
			'de-de': "Vorbereitungen treffen",
			'es-es': "Prepárate",
			'pt-br': "Planejamento",
			'it-it': "Pronti a Tutto",
			'en-us': "Be Prepared"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia básica da sua mão a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			'en-us': "Attach a basic Energy card from your hand to this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso",
			'en-us': "Bite"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	thirdParty: {
		cardmarket: 491204
	}
}

export default card
