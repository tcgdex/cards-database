import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Absol G",
		fr: "Absol ",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darkness Send",
				fr: "Envoi obscur",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Absol G LV.X from your hand onto your Active Absol G, you may flip 3 coins. For each heads, put the top card from your opponent's deck in the Lost Zone.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Absol  NIV.X de votre main sur votre Absol  Actif, vous pouvez lancer 3 pièces. Pour chaque face, placez la carte du dessus du deck de votre adversaire dans la Zone Perdue.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Slugger",
				fr: "Joueur obscur",
			},
			effect: {
				en: "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage.",
				fr: "Vous pouvez défausser une carte de votre main. Cette attaque inflige alors 30 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
