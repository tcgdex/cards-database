import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rain Castform",
		fr: "Morpheo Pluie",
		de: "Regen-Formeo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperamental Weather",
				fr: "Météo capricieuse",
				de: "Wechselhaftes Wetter"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Soleil ou Morpheo Neige et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât, les États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach Formeo, Sonnen-Formeo oder Schneewolken-Formeo durchsuchen und gegen Regen-Formeo austauschen. (Alle an Regen-Formeo angelegten Karten, Schadensmarken, Spezielle Zustände und andere Effekte werden auf das neue Pokémon übertragen.) Mische Regen-Formeo zurück in dein Deck. Du kannst nicht mehr als 1 Wechselhaftes Wetter Poké-Power pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Holon Splash",
				fr: "Éclaboussure Holon",
				de: "Holon-Platscher"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Holon Energy card attached to Rain Castform.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Holon attachée à Morpheo Pluie.",
				de: "Fügt 30 Schadenspunkte plus 10 zusätzliche Schadenspunkte für jede an Regen-Formeo angelegte Holon-Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276789,
		tcgplayer: 88544
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

