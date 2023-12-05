import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Politoed",
		de: "Quaxo"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Growth",
				de: "Plötzliches Wachstum"
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to Politoed.",
				de: "Lege eine beliebige Anzahl an Basis-Energiekarten aus deiner Hand an Quaxo an."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
				de: "Froschhüpfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Splash",
				de: "Energieplatscher"
			},
			effect: {
				en: "Move 2 Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon, or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect.",
				de: "Lege 2 an Quaxo angelegte -Energiekarten an 1 oder 2 der Pokémon auf deiner Bank an. (Du kannst beide an dasselbe Pokémon anlegen oder je 1 an 2 verschiedene Pokémon.) Hast du keine Pokémon auf deiner Bank, ignoriere diesen Effekt."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
