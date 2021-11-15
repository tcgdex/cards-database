import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Nincada",
		fr: "Ningale"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		290,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			name: {
				en: "Leech Life",
				fr: "Vampirisme"
			},

			effect: {
				en: "After your attack, remove from Nincada the number of damage counters equal to the damage you did to the Defending Pokémon. If Nincada has fewer damage counters than that, remove all of them.",
				fr: "Après votre attaque, retirez à Ningale autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Ningale a moins de marqueurs de dégât que de dégâts infligés, retirez-les lui tous."
			},

			cost: ["Grass"],
			damage: 10
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
