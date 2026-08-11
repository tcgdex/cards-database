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
		fr: "Macronium",
		de: "Lorblatt"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Wild Growth",
				fr: "Luxuriance",
				de: "Wildes Wachstum"
			},
			effect: {
				en: "As long as Meganium is in play, each Grass Energy card attached to your Grass Pokémon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.",
				fr: "Aussi longtemps que Meganium est en jeu, chaque carte Énergie  attachée à vos Pokémon  fournit  . Ce pouvoir disparaît pendant que Meganium est Endormi, Confus ou Paralysé.",
				de: "Solange Meganie im Spiel ist, liefert jede {G}-Energie, die an deine {G}-Pokémon angelegt ist, stattdessen {G}{G}. Diese Fähigkeit verliert ihre Wirkung, solange Meganie schläft, verwirrt oder gelähmt ist."
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
				de: "Beruhigender Duft"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
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
	retreat: 3,


	description: {
		en: "The aroma that rises from its petals contains a substance that calms aggressive feelings.",
		fr: "Les arômes qui s'élèvent de ses pétales contiennent des substances qui effacent les sentiments agressifs.",
		de: "Das aus seinen Blättern aufsteigende Aroma enthält eine Substanz, die aggressive Gefühle besänftigt."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87287
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87287
			}
		}
	]
}

export default card
