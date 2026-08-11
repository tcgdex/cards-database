import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi Niv. 39",
		'de-de': "Jirachi"
	},

	illustrator: "Kenkichi Toyama",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [385],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Final Wish",
				'fr-fr': "Dernier souhait",
				'de-de': "Letzter Wunsch"
			},
			effect: {
				'en-us': "Once during your opponent's turn, if Jirachi would be Knocked Out by damage from an attack, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois lors du tour de votre adversaire, si Jirachi est mis K.O par des dégâts d'une attaque, vous pouvez choisir 1 carte dans votre deck et la placer dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Einmal während des Zuges deines Gegners kannst du, wenn Jirachi durch Schaden eines Angriffs kampfunfähig würde, dein Deck nach 1 Karte durchsuchen und sie auf die Hand nehmen. Mische dein Deck danach."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Detour",
				'fr-fr': "Détour",
				'de-de': "Umweg"
			},
			effect: {
				'en-us': "If you have a Supporter card in play, use the effect of that card as the effect of this attack.",
				'fr-fr': "Si vous avez une carte Supporter en jeu, utilisez l'effet de cette carte comme l'effet de cette attaque.",
				'de-de': "Wenn du 1 Unterstützerkarte im Spiel hast, nutze den Effekt der Unterstützerkarte als Effekt dieses Angriffs."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278581,
				tcgplayer: 86329
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278581,
				tcgplayer: 86329
			}
		},
	],

}

export default card
