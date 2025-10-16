import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard EX",
	},

	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [6],
	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	illustrator: "5ban Graphics",

	abilities: [
		{
			type: "Ability",

			name: {
				en: "Infernal Reign",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may " +
					"search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way " +
					"you like. Then, shuffle your deck.",
			},
		}
	],

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Burning Darkness",
			},

			damage: "180+",
			effect: {
				en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			}
		},
	],

	retreat: 2,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
		},
		{
			type: "lenticular",
			size: "jumbo"
		}
	]
}

export default card
