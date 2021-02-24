import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		563,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Six Feet Under",
				fr: "Pas de Quartier",
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Slap of Misfortune",
				fr: "Revers de Fortune",
			},
			effect: {
				en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
