import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
		de: "Hubelupf"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Hoppip",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lightweight",
				fr: "Poids-plume",
				de: "Leichtgewicht"
			},
			effect: {
				en: "You pay Colorless less to retreat Skiploom for each Grass Energy attached to it.",
				fr: "Vous payez  de moins pour faire battre Floravol en retraite pour chaque Énergie  qui lui est attachée.",
				de: "Für jede an Hubelupf angelegte -Energie zahlst du  weniger, wenn du es zurückziehst."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Break Powder",
				fr: "Poudre cassante",
				de: "Pausenpuder"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage and the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts et le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu und das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275133
	}
}

export default card
