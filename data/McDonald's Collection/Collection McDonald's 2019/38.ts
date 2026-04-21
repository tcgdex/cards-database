import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	dexId: [113],
	set: Set,
	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",

	name: {
		fr: "Leveinard",
	},

	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Pirouette Apaisante",
			},
			damage: "",
			effect: {
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
			}
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				fr: "Gifle Cordiale",
			},
			damage: 100,
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479864,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581892,
			}
		},
	],
}

export default card

