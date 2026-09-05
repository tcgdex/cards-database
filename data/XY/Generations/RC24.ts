import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [700, 702],

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
				de: "Flattern"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Friend",
				fr: "Ami Féérique",
				de: "Feen-Freund"
			},
			effect: {
				en: "If you have any Fairy Pokémon on your Bench, this attack does 30 more damage.",
				fr: "Si vous avez un Pokémon Fairy sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn du mindestens 1 {FAIRY}-Pokémon auf deiner Bank hast, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This fluffiness makes everyone go crazy. Is it really that charming?",
		de: "Diese Flaumigkeit macht alle ganz verrückt. Ist sie wirklich so bezaubernd?"
	},

	thirdParty: {
		cardmarket: 288533
	}
}

export default card
