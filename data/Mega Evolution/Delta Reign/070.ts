import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [877],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			fr: "Appel à la Famille"
		},

		cost: ["Colorless"],

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		}
	}, {
		name: {
			fr: "Gifle"
		},

		cost: ["Darkness"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		fr: "L'énergie électrique dans ses joues a adopté le type Ténèbres. Il a tellement faim qu'il en devient extrêmement violent."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
