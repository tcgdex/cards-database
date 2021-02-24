import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 150,
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
			type: "Ability",
			name: {
				en: "Unseen Flash",
				fr: "Flash Invisible",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 Lightning Energy cards from your hand in the Lost Zone. If you do, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 cartes Énergie Lightning de votre main dans la Zone Perdue. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Split Bomb",
				fr: "Bombe Fendante",
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
