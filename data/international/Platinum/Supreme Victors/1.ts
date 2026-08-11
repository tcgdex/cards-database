import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Absol G",
		'fr-fr': "Absol G",
		'de-de': "Absol G"
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",

	set: Set,
	dexId: [359],
	hp: 70,
	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'de-de': "Finte"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doom News",
				'fr-fr': "Nouvelles sinistres",
				'de-de': "Verhängnisvolle Neuigkeit"
			},
			effect: {
				'en-us': "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
				'fr-fr': "Reprenez dans votre main toutes les cartes attachées à Absol . Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
				'de-de': "Nimm alle an Absol G angelegten Energiekarten zurück auf deine Hand. Das Verteidigende Pokémon wird am Ende des nächsten Zuges deines Gegners kampfunfähig."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278692,
				tcgplayer: 83457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278692,
				tcgplayer: 83457
			}
		},
	],

}

export default card
