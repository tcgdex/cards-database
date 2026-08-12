import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		548,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage and heal 10 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires et vous soignez 10 dégâts à ce Pokémon.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu und heilt 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Since they prefer moist, nutrient-rich soil, the areas where Petilil live are known to be good for growing plants.",
		de: "Da es nährstoffreiche Erde bevorzugt, kann man in Gebieten, in denen es lebt, für gewöhnlich reiche Ernten erwarten."
	},

	thirdParty: {
		cardmarket: 279747,
		tcgplayer: 87990
	}
}

export default card
