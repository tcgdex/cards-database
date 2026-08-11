import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [666],
	set: Set,

	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	attacks: [{
		name: {
			'en-us': "Vital Powder",
			'fr-fr': "Poudre Vitale",
			'es-es': "Polvo Vital",
			'it-it': "Pulviscoppio Vitale",
			'pt-br': "Pó Vital",
			'de-de': "Vitalpuder"
		},

		effect: {
			'en-us': "Heal all damage from 2 of your Benched Pokémon.",
			'fr-fr': "Soignez tous les dégâts de 2 de vos Pokémon de Banc.",
			'es-es': "Cura todos los puntos de daño a 2 de tus Pokémon en Banca.",
			'it-it': "Cura due dei tuoi Pokémon in panchina da tutti i danni.",
			'pt-br': "Cure todo o dano de 2 dos seus Pokémon no Banco.",
			'de-de': "Heile allen Schaden bei 2 Pokémon auf deiner Bank."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544961,
				tcgplayer: 234072
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544961,
				tcgplayer: 234072
			}
		},
	],
}

export default card
