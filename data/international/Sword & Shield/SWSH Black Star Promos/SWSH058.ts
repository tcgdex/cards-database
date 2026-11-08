import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	illustrator: "sui",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'de-de': "Hokumil",
		'es-es': "Milcery",
		'pt-br': "Milcery",
		'it-it': "Milcery"
	},

	attacks: [{
		name: {
			'en-us': "Decorate",
			'fr-fr': "Nappage",
			'es-es': "Decoración",
			'it-it': "Decorazione",
			'pt-br': "Decorar",
			'de-de': "Verzierung"
		},

		effect: {
			'en-us': "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Une cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue qualquer número de cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante",
			'de-de': "Diebeskuss"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	stage: "Stage1",
	dexId: [869],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 516314
	}
}

export default card
