import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium",
		de: "Meganie"
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
				fr: "Luxuriance",
				de: "Wild Growth"
			},
			effect: {
				en: "As long as Meganium is in play, each Grass Energy card attached to your Grass Pokémon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.",
				fr: "Aussi longtemps que Meganium est en jeu, chaque carte Énergie  attachée à vos Pokémon  fournit  . Ce pouvoir disparaît pendant que Meganium est Endormi, Confus ou Paralysé.",
				de: "As long as Meganium is in play, each  Energy card attached to your  Pokémon instead provides . This power stops working while Meganium is Asleep, Confused, or Paralyzed."
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
				fr: "Senteur apaisante",
				de: "Soothing Scent"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
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
	},

	thirdParty: {
		cardmarket: 274410,
		tcgplayer: 87287
	}
}

export default card
