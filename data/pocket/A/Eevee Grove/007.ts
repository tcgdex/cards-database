import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Appletun",
		'fr-fr': "Dratatin"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [842],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Applin"
	},

	description: {
		'en-us': "It feeds mainly on sweet apples. It will also eat\nsmall bug Pokémon that are attracted by its\nsweet nectar.",
		'fr-fr': "Il se nourrit principalement de pommes sucrées, mais il peut aussi manger de petits Pokémon Insecte, attirés par son miel onctueux."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sweets Relay",
			'fr-fr': "Saupoudrage Sucré"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 30 more damage.",
			'fr-fr': "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 30 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card