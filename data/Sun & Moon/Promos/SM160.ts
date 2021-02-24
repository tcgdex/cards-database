import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Queen's Call",
				fr: "Appel de la Souveraine",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon that isn't a Pokémon-GX or Pokémon-EX, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon qui n’est pas un Pokémon-GX ou un Pokémon-EX, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Lariat",
				fr: "Lasso Puissant",
			},
			effect: {
				en: "This attack does 50 more damage for each Evolution Pokémon on your Bench.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
