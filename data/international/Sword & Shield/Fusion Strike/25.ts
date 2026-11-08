import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [830],
	set: Set,

	name: {
		'en-us': "Eldegoss",
		'fr-fr': "Blancoton",
		'es-es': "Eldegoss",
		'it-it': "Eldegoss",
		'pt-br': "Eldegoss",
		'de-de': "Cottomi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sunny Wind",
			'fr-fr': "Vent Ensoleillé",
			'de-de': "Sonnige Brise",
			'es-es': "Viento Soleado",
			'pt-br': "Vento Ensolarado",
			'it-it': "Vento Solare"
		},

		damage: 50,

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582092,
				tcgplayer: 253118
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582092,
				tcgplayer: 253118
			}
		},
	],
}

export default card
