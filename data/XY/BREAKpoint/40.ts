import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadow Stitching",
				fr: "Ombre Suture",
			},
			effect: {
				en: "Until the end of your opponent’s next turn, each Pokémon your opponent has in play, in his or her hand, and in his or her discard pile has no Abilities. (This includes cards that come into play on that turn.)",
				fr: "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon de votre adversaire en jeu, dans sa main et dans sa pile de défausse, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Moonlight Slash",
				fr: "Tranch'Lune",
			},
			effect: {
				en: "You may return a Water Energy from this Pokémon to your hand. If you do, this attack does 20 more damage.",
				fr: "Vous pouvez reprendre une Énergie Water de ce Pokémon dans votre main. Dans ce cas, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
