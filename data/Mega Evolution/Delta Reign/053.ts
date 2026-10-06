import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Groudon",
		fr: "Groudon"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 150,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Strength",
			fr: "Force"
		},

		cost: ["Fighting", "Colorless"],

		damage: 40
	}, {
		name: {
			en: "Brutal Lands",
			fr: "Terres Brutales"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "If a Stadium that has \"Legendary\" in its name is in play, this attack does 170 more damage.",
			fr: "Si un Stade ayant « Légendaire » dans son nom est en jeu, cette attaque inflige 170 dégâts supplémentaires."
		},

		damage: "100+"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	description: {
		en: "Groudon is said to have expanded the reach of dry land by evaporating water with raging heat. It battled ferociously against Kyogre.",
		fr: "On dit que ce Pokémon a émis une forte chaleur pour évaporer l'eau et étendre les continents. Il a mené un combat sans merci contre Kyogre."
	},

	variants: [
		{ type: "holo" },
		{ type: "reverse" }
	],
}

export default card
