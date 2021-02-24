import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Electrode-GX",
		fr: "Électrode-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 190,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Extra Energy Bomb",
				fr: "Bombe Extra-Énergétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach 5 Energy cards from your discard pile to your Pokémon, except Pokémon-GX or Pokémon-EX, in any way you like. If you do, this Pokémon is Knocked Out.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher 5 cartes Énergie de votre pile de défausse à vos Pokémon, à l’exception des Pokémon-GX et Pokémon-EX, de la manière que vous voulez. Dans ce cas, ce Pokémon est mis K.O.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Crush and Burn-GX",
				fr: "Écra-Brûle-GX",
			},
			effect: {
				en: "Discard any amount of Energy from your Pokémon. This attack does 50 more damage for each card you discarded in this way. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez n’importe quel nombre d’Énergies de vos Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
