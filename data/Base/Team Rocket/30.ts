import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Vileplume",
		fr: "Rafflesia obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hay Fever",
				fr: "Rhume des foins"
			},
			effect: {
				en: "No Trainer cards can be played. This power stops working while Dark Vileplume is Asleep, Confused, or Paralyzed.",
				fr: "Aucune carte Dresseur ne peut être jouée. Ce pouvoir cesse de fonctionner lorsque Rafflesia obscur est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Petal Whirlwind",
				fr: "Tourbillon de pétales"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Dark Vileplume is now Confused (after dealing damage).",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Si vous obtenez 2 faces ou plus, Rafflesia obscur est maintenant Confus (après application des dégâts)."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Les autres Pokémon restent à l'écart des endroits où vivent les Rafflesia, peut être en raison du fort parfum de leur pollen."
	}
}

export default card
