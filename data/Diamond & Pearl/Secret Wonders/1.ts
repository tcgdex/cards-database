import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 130,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Jamming",
				fr: "Encombrement",
			},
			effect: {
				en: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
				fr: "Une fois que votre adversaire a joué une carte Supporter de sa main, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Body Encombrement par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cluster Bolt",
				fr: "Groupe d'éclairs",
			},
			effect: {
				en: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à Pharamp. Cette attaque inflige alors 20 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
