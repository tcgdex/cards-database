import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Métamorph",
		de: "Ditto"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [122],

	dexId: [132],

	hp: 60,

	types: [
		"Psychic"
	],
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psystrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Duplicate",
			fr: "Duplicata",
			de: "Duplizieren"
		},

		effect: {
			en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can’t use more than 1 Duplicate Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un autre Metamorph et l'échanger avec Metamorph. (Toutes les cartes attachées à Metamorph, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Metamorph au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Duplicata par tour.",
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer anderen Ditto Karte durchsuchen und diese gegen Ditto austauschen. (Alle an Ditto angelegten Karten sowie Schadensmarken, Spezielle Zustände und Effekte auf Ditto werden auf das neue Ditto übertragen.) Wenn du dies machst, lege Ditto auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Duplizieren Poké-Power pro Zug einsetzen."
		}
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84842,
				cardmarket: 277460
			},
		},
	],

}

export default card
