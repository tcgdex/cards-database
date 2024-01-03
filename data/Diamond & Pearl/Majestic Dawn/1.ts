import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		de: "Arktos"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Freezing Screech",
				fr: "Hurlement glaçant",
				de: "Einfrierendes Geschrei"
			},
			effect: {
				en: "Once during your turn, when you put Articuno from your hand onto your Bench, you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Arktos de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Paralysé.",
				de: "Einmal während deines Zuges kannst du, wenn du Arktos von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" wähle 1 Verteidigendes Pokémon. Das gewählte Pokémon ist jetzt gelähmt."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				de: "Blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. Bei \"Zahl\" fügt dieser Angriff jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
