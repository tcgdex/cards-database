import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flareon ex",
		'fr-fr': "Pyroli-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [136],
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Combust",
			'fr-fr': "Ignition"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a {R} Energy from your discard pile to this Pokémon. If you do, do 20 damage to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une Énergie {R} de votre pile de défausse à ce Pokémon. Dans ce cas, ce Pokémon subit 20 dégâts."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Fire Spin",
			'fr-fr': "Danse Flammes"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "Discard 2 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card