import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Mew V",
		'fr-fr': "Mew V",
		'es-es': "Mew V",
		'it-it': "Mew V",
		'pt-br': "Mew V",
		'de-de': "Mew V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [151],
	set: Set,
	hp: 180,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "X Ball",
				'fr-fr': "X Ball",
				'es-es': "Bola X",
				'it-it': "Sfera X",
				'pt-br': "Bola X",
				'de-de': "X-Ball"
			},
			effect: {
				'en-us': "This attack does 30 damage for each Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
				'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483224,
				tcgplayer: 219443
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 675828
			}
		},
	],
}

export default card
