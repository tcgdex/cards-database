import { Card } from '../../../interfaces'
import Set from '../Unseen Forces Unown Collection'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito"
	},
	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shuffle",
				fr: "Réorganisation",
				de: "Mischen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un autre Zarbi et l'échanger avec Zarbi. (Toutes les cartes attachées à Zarbi, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Zarbi au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Réorganisation par tour.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du einmal dein Deck nach einer anderen Icognito Karte durchsuchen und diese gegen Icognito austauschen. (Alle an Icognito angelegten Karten sowie Schadenspunkte, Speziellen Zustände und Effekte auf Icognito werden auf das neue Pokémon übertragen.) Wenn du dies machst, lege Icognito auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Mischen Poké-Power pro Zug einsetzen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Does 20 damage to each Pokémon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance.",
				fr: "Inflige 20 dégâts à chaque Pokémon possédant des Poké-Powers ou des Poké-Bodies (les vôtres et ceux de votre adversaire). Vous ne pouvez pas appliquer la Faiblesse ou la Résistance.",
				de: "Fügt jedem Pokémon, das mindestens 1 Poké-Power oder 1 Poké-Body hat, 20 Schadenspunkte zu (deinen und den gegnerischen). Wende Schwäche und Resistenz nicht an."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90193,
				cardmarket: 276639
			}
		}
	]




}

export default card
