import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Pichu Bros.",
		fr: "Pichu Bros."
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Bustle",
				fr: "Remue-ménage"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads. If either coin is heads, the Defending Pokémon is now Confused.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 1 face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277464,
		tcgplayer: 88024
	}
}

export default card
