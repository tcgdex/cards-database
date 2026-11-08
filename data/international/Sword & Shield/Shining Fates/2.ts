import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		'fr-fr': "Yanmega",
		'en-us': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Yanma",
		'en-us': "Yanma"
	},

	attacks: [{
		name: {
			'fr-fr': "Piqûre",
			'en-us': "Bug Bite",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'fr-fr': "Descente en Piqué",
			'en-us': "Nosedive",
			'es-es': "Ataque en Picado",
			'it-it': "Rapidiscesa",
			'pt-br': "Mergulhar de Bico",
			'de-de': "Sturzflugangriff"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539033,
				tcgplayer: 232349
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539033,
				tcgplayer: 232349
			}
		},
	],
}

export default card
