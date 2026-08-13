import { Card } from '../../../interfaces'
import Set from '../Unseen Forces Unown Collection'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito"
	},
	illustrator: "Shin-ichi Yoshikawa",
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
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "If your opponent's Bench isn't full, look at his or her hand. Choose 1 Basic Pokémon you find there and put it onto your opponent's Bench. Then, switch it with the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Si le Banc de votre adversaire n'est pas plein, regardez sa main. Choisissez 1 Pokémon de base et placez-le sur le Banc de votre adversaire. Ensuite, échangez-le avec le Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Wenn die Bank deines Gegners nicht voll besetzt ist, schau dir die Hand deines Gegners an. Wähle 1 Basis Pokémon das du dort findest aus und lege es auf die Bank des Gegners. Danach tausche das Verteidigende Pokémon mit diesem Pokémon aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird."
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
				tcgplayer: 90172,
				cardmarket: 276627
			}
		}
	]




}

export default card
