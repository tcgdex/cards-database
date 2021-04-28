import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Alolan Marowak-GX",
		fr: "Ossatueur d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 200,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Body",
				fr: "Corps Maudit",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fiery Bone",
				fr: "Os Flamboyant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 90,

		},
		{

			name: {
				en: "Lost Boomerang GX",
				fr: "Boomerang Perdu-GX",
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance. If a Pokémon is Knocked Out by this damage, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. Si un Pokémon est mis K.O. par ces dégâts, placez ce Pokémon-là et toutes les cartes qui lui sont attachées dans la Zone Perdue plutôt que dans la pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
