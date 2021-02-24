import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		508,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Arf Arf Bark",
				fr: "Ouaf Ouaf",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy from your opponent's Active Pokémon. If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, you may discard an Energy from your opponent's Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire. Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez défausser une Énergie du Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
