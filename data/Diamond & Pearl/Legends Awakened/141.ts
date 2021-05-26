import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 110,
	types: [
		"Fighting",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shoot Poison",
				fr: "Coup d'poison",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Gliscor LV.X from your hand onto your Active Gliscor, you may choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed and Poisoned.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Scorvol NIV.X de votre main sur votre Scorvol Actif, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Paralysé et Empoisonné.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Night Slash",
				fr: "Tranche-Nuit",
			},
			effect: {
				en: "You may switch Gliscor with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Scorvol avec 1 des Pokémon de votre Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
