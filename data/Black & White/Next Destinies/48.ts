import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Disconnect",
				fr: "Déconnexion",
				de: "Unterbrechen"
			},
			effect: {
				en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten von seiner Hand spielen."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Crash",
				fr: "Chute d'Éclairs",
				de: "Blitzstoß"
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Lege alle an dieses Pokémon angelegten {L}-Energien auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
		de: "Es ist explosiv wie ein Blitz. Galoppiert es mit voller Geschwindigkeit drauflos, kann man Donnerhall vernehmen."
	},

	thirdParty: {
		cardmarket: 280273,
		tcgplayer: 90730
	}
}

export default card
