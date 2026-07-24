import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Papilusion",
		de: "Smettbo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [182],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flower Supplement",
				fr: "Poudre miraculeuse",
				de: "Miraculous Powder"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez annuler tous les États spéciaux sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Papilusion est affecté par un État spécial.",
				de: "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knife Leaf",
				fr: "Sangsue spirale",
				de: "Spiral Drain"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts sur Papilusion.",
				de: "Flip a coin. If heads, remove 2 damage counters from Butterfree."
			},
			damage: "30×",

		},
	],

	retreat: 2,
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84059,
				cardmarket: 274880
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
