import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bayleef",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Wild Growth",
				fr: "Luxuriance"
			},
			effect: {
				en: "As long as Meganium is in play, each Grass Energy card attached to your Grass Pokémon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.",
				fr: "Aussi longtemps que Meganium est en jeu, chaque carte Énergie  attachée à vos Pokémon  fournit  . Ce pouvoir disparaît pendant que Meganium est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur apaisante"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Les arômes qui s'élèvent de ses pétales contiennent des substances qui effacent les sentiments agressifs."
	}
}

export default card
