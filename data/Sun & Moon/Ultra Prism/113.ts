import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Gumshoos",
		fr: "Argouste",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		735,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Identify",
				fr: "Identifier",
			},
			effect: {
				en: "Your opponent reveals their hand. If you find a Pokémon there, this attack does 80 more damage.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez un Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whap Down",
				fr: "Assommer",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
