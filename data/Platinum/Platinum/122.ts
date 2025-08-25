import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga G",
		fr: "Dialga ",
		de: "Dialga G"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "LEVEL-UP",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Time Crystal",
				fr: "Crystal temporel",
				de: "Time Crystal"
			},
			effect: {
				en: "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies.",
				fr: "Chaque Pokémon (les vôtres et ceux de votre adversaire) (Pokémon SP exclus) ne peut pas utiliser de Poké-Bodies.",
				de: "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies."
			},
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
				en: "Remove Lost",
				fr: "Retire-perte",
				de: "Remove Lost"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, retirez au Pokémon Défenseur une carte Énergie et placez-la dans la Zone Perdue.",
				de: "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone."
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

	thirdParty: {
		tcgplayer: 84811
	}
}

export default card
