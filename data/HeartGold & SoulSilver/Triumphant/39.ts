import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rendezvous Draw",
				fr: "Pioche commune",
				de: "Verabredungszieher"
			},
			effect: {
				en: "Each player draws and reveals the top card of his or her deck.",
				fr: "Chaque joueur pioche et dévoile la carte du dessus de son deck.",
				de: "Jeder Spieler zieht die oberste Karte seines Decks, zeigt sie seinem Gegner und nimmt sie auf die Hand."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Distorted Wave",
				fr: "Vague tordue",
				de: "Verzerrte Welle"
			},
			effect: {
				en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
				fr: "Avant d’infliger des dégâts, retirez un marqueur de dégât au Pokémon Défenseur.",
				de: "Bevor der Schaden zugefügt wird, entferne 1 Schadensmarke vom Verteidigenden Pokémon."
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
		en: "Its heart-shaped body makes it popular. In some places, you would give a Luvdisc to someone you love."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279569,
		tcgplayer: 86938
	}
}

export default card
