import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Luxray GL",
		fr: "Luxray  Niv. X",
		de: "Luxtra GL"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		405,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bright Look",
				fr: "Regard alerte",
				de: "Blendender Blick"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Luxray LV.X from your hand onto your Active Luxray , you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Luxray  LV.X de votre main sur votre Luxray  Actif, vous pouvez échanger le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Luxtra GL LV.X von deiner Hand auf dein Aktives Luxtra GL legst, das Verteidigende Pokémon gegen ein Pokémon auf der Bank deines Gegners austauschen."
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
				en: "Flash Impact",
				fr: "Impact-flash",
				de: "Blitzeinschlag"
			},
			effect: {
				en: "Does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
				fr: "Inflige 30 dégâts à 1 de vos Pokémon. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
				de: "Dieser Angriff fügt 1 deiner Pokémon 30 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 60,

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




}

export default card
