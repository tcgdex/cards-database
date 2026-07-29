import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		de: "Smettbo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [12],

	hp: 80,

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
				en: "Miraculous Powder",
				fr: "Poudre miraculeuse",
				de: "Miraculous Powder"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition.",
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
				en: "Spiral Drain",
				fr: "Sangsue spirale",
				de: "Spiral Drain"
			},
			effect: {
				en: "Flip a coin. If heads, remove 2 damage counters from Butterfree.",
				fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts sur Papilusion.",
				de: "Flip a coin. If heads, remove 2 damage counters from Butterfree."
			},
			damage: 40,

		},
	],

	retreat: 0,
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
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
			thirdParty: {
				tcgplayer: 84059,
				cardmarket: 274880
			},
		},
	],
}

export default card
