import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tapu Koko ◇",
		fr: "Tokorico ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dance of the Ancients",
				fr: "Danse des Ancêtres",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may choose 2 of your Benched Pokémon and attach a Lightning Energy card from your discard pile to each of them. If you do, discard all cards from this Pokémon and put it in the Lost Zone.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez choisir 2 de vos Pokémon de Banc et attacher une carte Énergie Lightning de votre pile de défausse à chacun d’eux. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le dans la Zone Perdue.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mach Bolt",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},

			damage: 120,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair Fulgurant",
			},

			damage: 120,

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
