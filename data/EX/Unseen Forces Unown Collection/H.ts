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
				en: "Search your deck for up to 2 Pokémon Tool cards and attach them to any of your Pokémon (excluding Pokémon that already have a Pokémon Tool attached to them). Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck 2 cartes Outil Pokémon et attachez-les à vos Pokémon (Pokémon possédant un Outil Pokémon exclus). Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Pokémon-Ausrüstungen und lege sie an beliebige deiner Pokémon an (An keinem Pokémon darf mehr als 1 Pokémon-Ausrüstung angelegt sein). Mische dein danach Deck."
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
				tcgplayer: 90175,
				cardmarket: 276631
			}
		}
	]




}

export default card
