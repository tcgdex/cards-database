import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Deoxys δ",
		fr: "Deoxys δ",
		de: "Deoxys"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
				fr: "Changement de forme",
				de: "Gestaltwandel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys. (Toutes les cartes attachées à Deoxys, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du ein Mal dein Deck nach einer anderen Deoxys-Karte durchsuchen und diese gegen Deoxys austauschen. (Alle an Deoxys angelegten Karten sowie Schadenspunkte, Spezielle Effekte auf Deoxys werden auf das neue Pokémon übertragen.) Wenn du dies machst, lege Deoxys auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Gestaltwandel Poke-Power pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Delta Reduction",
				fr: "Réduction Delta",
				de: "Delta-Reduktion"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Deoxys by attacks is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Deoxys par des attaques sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird jeder Schaden, der Deoxys durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276973
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
