import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		de: "Magnetilo"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
				de: "Blitzkanone"
			},
			effect: {
				en: "This Pokémon can't use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				de: "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		en: "It has about three times the electrical power of Magnemite. For some reason, outbreaks of this Pokémon happen when lots of sunspots appear.",
		de: "Seine Stromstärke ist fast dreimal so hoch wie die eines Magnetilos. Es erscheint vermehrt, wenn Flecken auf der Sonne auftauchen."
	},
}

export default card
