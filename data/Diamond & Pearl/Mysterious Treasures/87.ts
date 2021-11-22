import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mountain Bite",
				fr: "Morsure des montagnes"
			},
			effect: {
				en: "You may discard the top card of your deck. If you do, this attack does 10 damage plus 10 more damage and Larvitar is now Asleep.",
				fr: "Vous pouvez défausser la carte du dessus de votre deck. Cette attaque inflige alors 10 dégâts plus 10 dégâts supplémentaires et Embrylex est maintenant Endormi."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		fr: "Un Pokémon qui se nourrit de terre. Après avoir dévoré une montagne, il s'endort pour grandir."
	}
}

export default card
