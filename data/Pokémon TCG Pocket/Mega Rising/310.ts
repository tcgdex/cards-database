import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [744],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
		fr: "Ce Pokémon est très amical lorsqu'il est jeune. il devient plus féroce avec le temps, mais sa loyauté envers son Dresseur reste infaillible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution"
		},

		cost: ["Fighting"],

		effect: {
			en: "Put a random card that evolves from Rockruff from your deck into your hand.",
			fr: "Ajoutez au hasard une carte Évolution de Rocabot de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card