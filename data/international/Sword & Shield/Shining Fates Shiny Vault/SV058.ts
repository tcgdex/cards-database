import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'fr-fr': "Charmilly",
		'en-us': "Alcremie",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Crèmy",
		'en-us': "Milcery"
	},

	attacks: [{
		name: {
			'fr-fr': "Nappage",
			'en-us': "Decorate",
			'es-es': "Decoración",
			'it-it': "Decorazione",
			'pt-br': "Decorar",
			'de-de': "Verzierung"
		},

		effect: {
			'fr-fr': "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
			'en-us': "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			'es-es': "Une cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue qualquer número de cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Vampibaiser",
			'en-us': "Draining Kiss",
			'es-es': "Beso Drenaje",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante",
			'de-de': "Diebeskuss"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539678,
				tcgplayer: 232423
			}
		},
	],
}

export default card
