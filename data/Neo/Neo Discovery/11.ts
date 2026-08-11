import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		de: "Farbeagle"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sketch",
				fr: "Gribouille",
				de: "Nachahmer"
			},
			effect: {
				en: "If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.",
				fr: "Si le Pokémon Défenseur a attaqué au tour précédent et si Queulorior était en jeu pendant cette attaque, Queulorior peut copier cette attaque excepté son coût en Énergie et les autres éléments nécessaires à cette attaque.",
				de: "Wenn das verteidigende Pokémon im letzten Zug angegriffen hat und Farbeagle während dieses Angriffs im Spiel war, kopiert Farbeagle diesen Angriff (außer den Energiekosten und allem anderen, was du tun musst, um diesen Angriff zu verwenden)."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "A special fluid oozes from the tip of its tail. It paints the fluid everywhere to mark its territory.",
		fr: "Un liquide spécial recouvre l'extrémité de sa queue. Il l'utilise comme peinture pour marquer son territoire.",
		de: "Eine besondere Flüssigkeit quillt aus seiner Schwanzspitze. Es malt diese Flüssigkeit überallhin, um damit sein Revier zu markieren."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274522,
				tcgplayer: 89350
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274522,
				tcgplayer: 89350
			}
		}
	]
}

export default card
