import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Absol ex",
		fr: "Absol ex",
		de: "Absol ex"
	},

	illustrator: "Ryo Ueda",
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

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cursed Eyes",
				fr: "Yeux maléfiques",
				de: "Böser Blick"
			},
			effect: {
				en: "Once during your turn, when you put Absol ex from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Absol ex de votre main sur votre Banc, vous pouvez déplacer 3 marqueurs de dégât d'1 des Pokémon de votre adversaire sur 1 autre de ses Pokémon.",
				de: "Einmal während deines Zuges, wenn du Absol ex von deiner Hand auf deine Bank legst, kannst du 3 Schadensmarken von 1 Pokémon deines Gegners auf ein anderes Pokémon deines Gegners legen."
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
				en: "Psychic Pulse",
				fr: "Vibration psy",
				de: "Psychoplus"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possèdant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen gegnerischen Pokémon auf der Bank, auf denen schon mindestens 1 Schadensmarke liegt, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277398,
		tcgplayer: 83456
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		}
	]
}

export default card
