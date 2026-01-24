import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Mewtwo ex",
		fr: "Mewtwo-ex de la Team Rocket"
	},
	suffix: "EX",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "aky CG Works",
	dexId: [150],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Saver",
				fr: "Économie de Puissance"
			},
			effect:{
				en: "This Pokémon can't attack unless you have 4 or more Team Rocket's Pokémon in play.",
				fr: "Ce Pokémon ne peut attaquer que si vous avez 4 Pokémon de la Team Rocket ou plus en jeu."
			}
		}
	],

	attacks: [
		{
			cost: ["Psychic","Psychic","Colorless"],
			name: {
				en: "Erasure Ball",
			},
			effect: {
				en: "You may discard up to 2 Energy from your Benched Pokémon. This attack does 60 more damage for each" +
					" card you discarded in this way."
			},
			damage: "160+",
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			size: "jumbo"
		}
	]
}

export default card
