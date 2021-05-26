import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Never Give Up",
				fr: "Persistance",
			},
			effect: {
				en: "You can use this attack only if you have at least 3 more Prize cards remaining than your opponent. Attach all Lightning Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Vous ne pouvez utiliser cette attaque que s’il vous reste au moins 3 cartes Récompense de plus qu’à votre adversaire. Attachez toutes les cartes Énergie Lightning de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
