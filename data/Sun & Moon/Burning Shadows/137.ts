import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Marshadow-GX",
		fr: "Marshadow-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 150,
	types: [
		"Fightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Hunt",
				fr: "Chasse Dans l’Ombre",
			},
			effect: {
				en: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile. (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon de base dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
			},

			damage: 120,

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Peerless Hundred Blows-GX",
				fr: "Cent Coups Incomparables-GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of basic Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies de base attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
