import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [474],

	hp: 110,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dimension Transfer",
				'fr-fr': "Transfert dimensionnel",
				'de-de': "Dimensionstransfer"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it on top of your deck. This power can't be used if Porygon-Z is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck. Ce Poké-Power ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" durchsuche deinen Ablagestapel nach 1 Trainer-Karte, zeige sie deinem Gegner und lege sie oben auf dein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Porygon-Z von einem Speziellen Zustand betroffen ist."
			}
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
				'en-us': "Suspicious Beam β",
				'fr-fr': "Rayon β douteux",
				'de-de': "Verdächtiger Strahl β"
			},
			effect: {
				'en-us': "If Porygon-Z has no Rainbow Energy attached to it, Porygon-Z does 20 damage to itself and Porygon-Z is now Confused.",
				'fr-fr': "Si aucune Énergie Multicolore n’est attachée à Porygon-Z, Porygon-Z s’inflige 20 dégâts et est maintenant Confus.",
				'de-de': "Falls keine Regenbogen-Energie an Porygon-Z angelegt ist, fügt Porygon-Z sich selbst 20 Schadenspunkte zu und Porygon-Z ist jetzt verwirrt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its programming was modified to enable it to travel through alien dimensions. Seems there might have been an error…"
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88317,
				cardmarket: 279537
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279537,
				tcgplayer: 88317
			}
		},
	],

}

export default card
