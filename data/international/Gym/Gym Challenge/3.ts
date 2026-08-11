import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Ninetales"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Vulpix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Shapeshift"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach an Evolution card from your hand to Brock's Ninetales. (This doesn't count as evolving Brock's Ninetales.) Treat Brock's Ninetales as if it were that Pokémon instead. It can't evolve, devolve, or use the Pokémon Power of that Pokémon. During your turn, you may discard the Evolution card attached to Brock's Ninetales. This power can't be used if Brock's Ninetales is Asleep, Confused, or Paralyzed. If Brock's Ninetales becomes Asleep, Confused, or Paralyzed, discard all Evolution cards attached to it."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Will-o'-the-wisp"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83973,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83973,
				cardmarket: 274271
			}
		},
	],
}

export default card
