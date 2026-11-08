import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [205],

	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'es-es': "Forretress",
		'it-it': "Forretress",
		'pt-br': "Forretress",
		'de-de': "Forstellka"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'es-es': "Pineco",
		'it-it': "Pineco",
		'pt-br': "Pineco",
		'de-de': "Tannza"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double KO",
				'fr-fr': "Double K.O.",
				'es-es': "Doble Noqueo",
				'it-it': "Doppio KO",
				'pt-br': "Abate Duplo",
				'de-de': "Doppel-K.-o."
			},
			effect: {
				'en-us': "Both Active Pokémon are Knocked Out.",
				'fr-fr': "Les deux Pokémon Actifs sont mis K.O.",
				'es-es': "Ambos Pokémon Activos quedan Fuera de Combate.",
				'it-it': "Entrambi i Pokémon attivi vengono messi KO.",
				'pt-br': "Ambos os Pokémon Ativos são Nocauteados.",
				'de-de': "Beide Aktiven Pokémon werden kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512280,
				tcgplayer: 226567
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512280,
				tcgplayer: 226567
			}
		},
	],
}

export default card
