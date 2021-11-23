import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Cyclone",
				fr: "Cyclone d'O"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie  depuis votre Pokémon Actif à l'un de vos Pokémon du Banc. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapids",
				fr: "Rapides"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.",
				fr: "Lancez une pièce. Si c'est face, défaussez-vous d'une carte Énergie attachée au Pokémon Défenseur, s'il y en a une."
			},
			damage: 50,

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
