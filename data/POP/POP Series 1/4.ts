import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cling",
				fr: "« Corps à corps »"
			},
			effect: {
				en: "After your attack, remove from Sceptile the number of damage counters equal to the damage you did to the Defending Pokémon. If Sceptile has fewer damage counters than that, remove all of them.",
				fr: "Après votre attaque, retirez à Jungko un nombre de marqueurs de dégât équivalent aux dégâts que vous avez infligés au Pokémon Défenseur. Si Jungko a moins de marqueurs de dégât, retirez-les lui tous."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-feuille"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277418,
		tcgplayer: 88946
	}
}

export default card
