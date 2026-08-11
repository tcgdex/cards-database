import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [869],

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
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

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
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

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457853,
				tcgplayer: 213173
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457853,
				tcgplayer: 213173
			}
		},
	],
}

export default card
