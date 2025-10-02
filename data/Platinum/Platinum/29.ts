import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		de: "Entoron"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Swim",
				fr: "Nager",
				de: "Swim"
			},
			effect: {
				en: "If your opponent has any Water Energy attached to any of his or her Pokémon, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si les Pokémon de votre adversaire possèdent de l'Énergie Water, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "If your opponent has any  Energy attached to any of his or her Pokémon, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Slide",
				fr: "Toboggan d'O",
				de: "Water Slide"
			},
			effect: {
				en: "You may move all Energy cards attached to Golduck to 1 of your Benched Pokémon. If you do, this attack does 40 damage plus 20 more damage.",
				fr: "Vous pouvez déplacer toutes les cartes Énergie attachées à Akwakwak sur 1 de vos Pokémon de Banc. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires.",
				de: "You may move all Energy cards attached to Golduck to 1 of your Benched Pokémon. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278450,
		tcgplayer: 85816
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
