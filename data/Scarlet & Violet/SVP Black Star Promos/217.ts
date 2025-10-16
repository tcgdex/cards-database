import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoking ex",
	},
	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	illustrator: "5ban Graphics",
	dexId: [34],

	attacks: [
		{
			cost: ["Darkness","Darkness","Colorless"],
			name: {
				en: "Tainted Horn",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 8 damage counters on " +
					"that Pokémon instead of 1."
			},
			damage: "100",
		},
		{
			cost: ["Darkness","Darkness","Darkness","Colorless"],
			name: {
				en: "Kingly Impact",
			},
			damage: "240",
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
