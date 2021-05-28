import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Buzzap Generator",
				fr: "Générateur Buzzap"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is on your Bench, you may search your deck for up to 2 Lightning Energy cards and attach them to your Lightning Pokémon in any way you like. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Lightning, puis les attacher à vos Pokémon Lightning comme il vous plaît. Mélangez ensuite votre deck. Si vous avez cherché dans votre deck de cette façon, ce Pokémon est mis K.O."
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
				en: "Electric Ball",
				fr: "Boule de Foudre"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
