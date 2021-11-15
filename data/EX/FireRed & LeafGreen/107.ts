import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Electrode ex",
		fr: "Électrode ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Extra Energy Bomb",
				fr: "Bombe extra-énergétique"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard Electrode ex and all the cards attached to it (this counts as Knocking Out Electrode ex). If you do, search your discard pile for 5 Energy cards and attach them to any of your Pokémon (excluding Pokémon-ex) in any way you like. This power can't be used if Electrode ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser Électrode ex ainsi que toutes les cartes qui lui sont attachées (Électrode ex est K.O). Dans ce cas, cherchez dans votre pile de défausse 5 cartes Énergie et attachez-les à vos Pokémon (sauf les Pokémon-ex) de la façon que vous voulez. Ce pouvoir ne peut pas être utilisé si Électrode ex est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Crash and Burn",
				fr: "Écra-brûle"
			},
			effect: {
				en: "You may discard as many Energy as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy you discarded.",
				fr: "Vous pouvez défausser autant d'Énergies attachées aux Pokémon que vous avez en jeu que vous le voulez. Dans ce cas, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie défaussée."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
