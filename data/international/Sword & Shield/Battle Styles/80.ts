import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		'en-us': "Coalossal",
		'fr-fr': "Monthracite",
		'es-es': "Coalossal",
		'it-it': "Coalossal",
		'pt-br': "Coalossal",
		'de-de': "Montecarbo"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},

	attacks: [{
		name: {
			'en-us': "Coal Cannon",
			'fr-fr': "Canon Charbonneux",
			'es-es': "Cañón de Carbón",
			'it-it': "Carboncannone",
			'pt-br': "Canhão de Carvão",
			'de-de': "Kohlekanone"
		},

		effect: {
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "While it's engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545511,
				tcgplayer: 234256
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545511,
				tcgplayer: 234256
			}
		},
	],
}

export default card
