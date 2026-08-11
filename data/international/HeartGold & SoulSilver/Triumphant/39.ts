import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [370],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rendezvous Draw",
				'fr-fr': "Pioche commune",
				'de-de': "Verabredungszieher"
			},
			effect: {
				'en-us': "Each player draws and reveals the top card of his or her deck.",
				'fr-fr': "Chaque joueur pioche et dévoile la carte du dessus de son deck.",
				'de-de': "Jeder Spieler zieht die oberste Karte seines Decks, zeigt sie seinem Gegner und nimmt sie auf die Hand."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Distorted Wave",
				'fr-fr': "Vague tordue",
				'de-de': "Verzerrte Welle"
			},
			effect: {
				'en-us': "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
				'fr-fr': "Avant d’infliger des dégâts, retirez un marqueur de dégât au Pokémon Défenseur.",
				'de-de': "Bevor der Schaden zugefügt wird, entferne 1 Schadensmarke vom Verteidigenden Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its heart-shaped body makes it popular. In some places, you would give a Luvdisc to someone you love."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86938,
				cardmarket: 279569
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279569,
				tcgplayer: 86938
			}
		},
	],

}

export default card
