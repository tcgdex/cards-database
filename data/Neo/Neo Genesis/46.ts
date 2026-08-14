import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Glut"
			},
			effect: {
				en: "Discard 1 Energy card attached to Quilava in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Feurisson afin d'utiliser cette attaque.",
				de: "Lege eine an Igelavar angelegte {R}-Energiekarte ab, um diesen Angriff zu verwenden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Wind",
				fr: "Vent de feu",
				de: "Feuerwind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
				fr: "Si votre adversaire possède un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux. Lancez 2 pièces. Pour chaque face, cette attaque inflige 10 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance).",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wähle eines von ihnen. Wirf zwei Münzen. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte mal der Anzahl „Kopf“ zu. (Wende Schwäche und Resistenz nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "This Pokémon is fully covered by nonflammable fur. It can withstand any kind of fire attack.",
		fr: "Ce Pokémon est entièrement recouvert de fourrure ininflammable. Il peut résister à n'importe quel type d'attaque par le feu.",
		de: "Dieses Pokémon ist vollkommen von nicht feuerfestem Fell bedeckt. Es kann jeder Art von Feuerangriff widerstehen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274446,
				tcgplayer: 88480
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274446,
				tcgplayer: 88480
			}
		}
	]
}

export default card
