import { Card } from 'models/database/card'
import Set from '../Unseen Forces Unown Collection'

const card: Card = {
	name: {
		'en-us': "Unown",
		'fr-fr': "Zarbi"
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
				'en-us': "Shuffle",
				'fr-fr': "Réorganisation"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un autre Zarbi et l'échanger avec Zarbi. (Toutes les cartes attachées à Zarbi, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Zarbi au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Réorganisation par tour."
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
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée"
			},
			effect: {
				'en-us': "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				'fr-fr': "Comptez le nombre de cartes dans la main de votre adversaire. Placez autant de marqueurs de dégât sur le Pokémon Défenseur."
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
				cardmarket: 276619,
				tcgplayer: 90169,
			}
		}
	]




}

export default card
