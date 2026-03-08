import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Appletun",
		fr: "Dratatin"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [842],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Applin"
	},

	description: {
		en: "It feeds mainly on sweet apples. It will also eat\nsmall bug Pokémon that are attracted by its\nsweet nectar.",
		fr: "Il se nourrit principalement de pommes sucrées, mais il peut aussi manger de petits Pokémon Insecte, attirés par son miel onctueux."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Relay",
			fr: "Saupoudrage Sucré"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 30 more damage.",
			fr: "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 30 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card