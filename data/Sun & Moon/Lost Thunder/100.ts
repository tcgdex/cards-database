import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		563,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spirit Juggling",
				fr: "Jeu d’Esprits",
			},
			effect: {
				en: "Discard any number of your Benched Pokémon. This attack does 30 more damage for each Benched Pokémon you discarded in this way.",
				fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
			},
			damage: 10,

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
