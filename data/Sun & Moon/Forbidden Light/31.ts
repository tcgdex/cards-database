import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Volcanion ◇",
		fr: "Volcanion ",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		721,
	],
	hp: 160,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Jet Geyser",
				fr: "Propulsion Geyser",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Water Energy card from your hand. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Sauna Blast",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 100,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				fr: "Sauna Explosif",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 100,

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
