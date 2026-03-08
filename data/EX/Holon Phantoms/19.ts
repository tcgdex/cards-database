import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Bellossom δ",
		fr: "Joliflor δ",
		de: "Blubella"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fellowship",
				fr: "Fraternité",
				de: "Kameradschaft"
			},
			effect: {
				en: "Bellossom can use the attacks of all Oddish, Gloom, Vileplume, Vileplume ex, or other Bellossom you have in play as its own. (You still need the necessary Energy to use each attack.)",
				fr: "Joliflor peut utiliser les attaques de tous les Mystherbes, Ortides, Rafflesias, Rafflesias ex ou autres Joliflors que vous avez en jeu à la place des siennes. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
				de: "Blubella kann die Angriffe von allen Myrapla, Duflor, Giflor, Giflor ex oder anderen Blubella, die du im Spiel hast, nutzen als wären sie seine eigenen. (Du brauchst trotzdem die notwendige Energie, um den jeweiligen Angriff durchzuführen.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Flower",
				fr: "Fleur aquatique",
				de: "Aquablume"
			},
			effect: {
				en: "During your opponent's next turn, Bellossom has no Weakness.",
				fr: "Lors du prochain tour de votre adversaire, Joliflor ne possède pas de Faiblesse.",
				de: "Im nächsten Zug deines Gegners hat Blubella keine Schwäche."
			},
			damage: 40,

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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276989
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
