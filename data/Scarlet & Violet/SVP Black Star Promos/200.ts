import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Kariya",
	dexId: [133],
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
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Gnaw",
				fr: "Ronge"
			},
			damage: 20,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		}
	]
}

export default card
