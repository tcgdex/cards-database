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
				en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
				fr: "Choisissez dans la pile de défausse de votre adversaire une carte Supporter et utilisez l'effet de cette carte pour cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)",
				de: "Durchsuche den Ablagestapel deines Gegners nach 1 Unterstützerkarte und nutze ihren Effekt als Effekt dieses Angriffs. (Die Unterstützerkarte bleibt im Ablagestapel des Gegners.)"
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
				tcgplayer: 90170,
				cardmarket: 276625
			}
		}
	]




}

export default card
