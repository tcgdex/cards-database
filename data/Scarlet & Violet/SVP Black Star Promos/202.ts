import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Uta",
	dexId: [115],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck."
			}
		},
		{
			cost: ["Colorless", "Colorless","Colorless"],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing"
			},
			damage: 100,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card
