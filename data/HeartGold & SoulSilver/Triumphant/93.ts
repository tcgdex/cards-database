import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Ultra Rare",
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
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energymite",
				fr: "Énergimite",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. If you do, Electrode is Knocked Out. Look at the top 7 cards of your deck. Choose as many Energy cards as you like and attach them to your Pokémon in any way you like. Discard the other cards. This power can’t be used if Electrode is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce Poké-Power. Dans ce cas, Electrode est mis K.O. Regardez les 7 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez et attachez-les à vos Pokémon comme bon vous semble. Défaussez les autres cartes. Ce Poké-Power ne peut pas être utilisé si Electrode est affecté par un État Spécial.",
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
				en: "Gigashock",
				fr: "Electrochok",
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
