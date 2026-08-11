import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [868],
	set: Set,

	name: {
		'fr-fr': "Crèmy",
		'en-us': "Milcery",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Aromathérapie",
			'en-us': "Aromatherapy",
			'es-es': "Aromaterapia",
			'it-it': "Aromaterapia",
			'pt-br': "Aromaterapia",
			'de-de': "Aromakur"
		},

		effect: {
			'fr-fr': "Soignez 10 dégâts de chacun de vos Pokémon.",
			'en-us': "Heal 10 damage from each of your Pokémon.",
			'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "This Pokémon was born from sweet-smelling particles in the air. Its body is made of cream."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539673,
				tcgplayer: 232422
			}
		},
	],
}

export default card
