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
				en: "Herbal Scent",
				fr: "Senteur de thé",
				de: "Herbal Scent"
			},
			effect: {
				en: "When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all Grass Pokémon in play.",
				fr: "Lorsque vous jouez Meganium depuis votre main, vous pouvez lancer une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur les Pokémon  en jeu.",
				de: "When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all  Pokémon in play."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
		fr: "Le souffle de Meganium peut redonner vie aux plantes mortes."
	},

	thirdParty: {
		cardmarket: 274410,
		tcgplayer: 87286
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
