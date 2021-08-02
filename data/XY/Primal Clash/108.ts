import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Croissance α",
				en: "α Growth"
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
				en: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gather Strength",
				fr: "Pouvoir Collecté",
			},
			effect: {
				en: "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Blast",
				fr: "Explo-Draco",
			},
			effect: {
				en: "Discard a Water Energy and a Lightning Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Water et une Énergie Lightning attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
