import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kingdra δ",
		fr: "Hyporoi δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 110,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dragon Curse",
				fr: "Malédiction de dragon"
			},
			effect: {
				en: "Once during your turn (before your attack), if Kingdra is your Active Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon with δ on its card. This power can't be used if Kingdra is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Hyporoi est votre Pokémon Actif, vous pouvez placer 2 marqueurs de dégât sur 1 des Pokémon de votre adversaire possédant le symbole δ. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Extra Flame",
				fr: "Flamme supplémentaire"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de chaleur"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
