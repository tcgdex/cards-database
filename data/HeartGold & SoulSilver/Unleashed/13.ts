import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wash Out",
				fr: "Surlavage",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can’t be used if Blastoise is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Water attachée à l'un des Pokémon de votre Banc et l'attacher à votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État Spécial.",
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
				en: "Hydro Launcher",
				fr: "Hydrolanceur",
			},
			effect: {
				en: "Return 2 Water Energy attached to Blastoise to your hand. Choose 1 of your opponent’s Pokémon. This attack does 100 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Récupérez dans votre main 2 cartes Énergie Water attachées à Tortank. Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 100 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
