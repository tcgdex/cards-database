import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Flaaffy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie  et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electromagnetic Kick",
				fr: "Coup électromagnétique"
			},
			effect: {
				en: "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Lainergie s'inflige 10 dégâts."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		en: "If its coat becomes fully charged with electricity, its tail lights up. It fire hair that zaps on impact."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278039,
		tcgplayer: 85480
	}
}

export default card
