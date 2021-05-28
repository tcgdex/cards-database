import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Métamorph",
	},
	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Transform",
				fr: "Morphing",
			},
			effect: {
				en: "During your turn (before your attack), you may put a Basic Pokémon from your hand on top of this Pokémon. (This does not count as playing that Pokémon or evolving.) This Pokémon is now that Pokémon. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
				fr: "Pendant votre tour (avant votre attaque), vous pouvez placer un Pokémon de base de votre main sur ce Pokémon. (Cela n'équivaut pas à jouer ou à faire évoluer le Pokémon de base choisi.) Ce Pokémon devient le Pokémon de base choisi. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
