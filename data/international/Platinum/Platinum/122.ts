import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dialga G LV.X",
		'fr-fr': "Dialga ",
		'de-de': "Dialga G"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 120,

	types: [
		"Metal"
	],

	stage: "LEVEL-UP",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Time Crystal",
				'fr-fr': "Crystal temporel",
				'de-de': "Time Crystal"
			},
			effect: {
				'en-us': "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies.",
				'fr-fr': "Chaque Pokémon (les vôtres et ceux de votre adversaire) (Pokémon SP exclus) ne peut pas utiliser de Poké-Bodies.",
				'de-de': "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Remove Lost",
				'fr-fr': "Retire-perte",
				'de-de': "Remove Lost"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, retirez au Pokémon Défenseur une carte Énergie et placez-la dans la Zone Perdue.",
				'de-de': "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone."
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84811,
				cardmarket: 278543
			}
		},
		{
			type:"holo",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479895
			}
		},
		{
			type:"holo",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480027
			}
		}
	]
}

export default card
