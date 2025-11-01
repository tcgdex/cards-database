import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck",
		fr: "Psykokwak"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is constantly wracked by a headache. When the\nheadache turns intense, it begins using mysterious\npowers.",
		fr: "Ce Pokémon a tout le temps la migraine. Quand la douleur devient trop intense, il se met à utiliser des pouvoirs mystérieux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headache",
			fr: "Migraine"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Supporter de sa main lors son prochain tour."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card