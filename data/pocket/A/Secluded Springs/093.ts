import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [54],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It is constantly wracked by a headache. When the\nheadache turns intense, it begins using mysterious\npowers.",
		'fr-fr': "Ce Pokémon a tout le temps la migraine. Quand la douleur devient trop intense, il se met à utiliser des pouvoirs mystérieux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headache",
			'fr-fr': "Migraine"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Your opponent can't use any Supporter cards from their hand during their next turn.",
			'fr-fr': "Votre adversaire ne peut pas jouer de carte Supporter de sa main lors son prochain tour."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card