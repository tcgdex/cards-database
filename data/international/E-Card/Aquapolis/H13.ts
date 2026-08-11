import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'de-de': "Papungha"
	},

	illustrator: "Yuka Morii",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [189],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fluff",
				'fr-fr': "Coton",
				'de-de': "Aufplustern"
			},
			effect: {
				'en-us': "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
				'fr-fr': "Pendant le tour de votre adversaire, si Cotovol devait subir des dégâts ou être affecté par une attaque de l'adversaire et s'il a déjà au moins un marqueur de dégâts sur lui, lancez une pièce. Si c'est face, prévenez tous les effets de cette attaque (y compris les dégâts).",
				'de-de': "Ist Papungha während des Zuges deines Gegners von einem Angriff betroffen oder erleidet Schaden, und es liegt bereits mindestens 1 Schadensmarke auf ihm, wirf eine Münze. Verhindere bei \"Kopf\" alle Effekte dieses Angriffs (einschließlich Schaden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cotton Punch",
				'fr-fr': "Poing coton",
				'de-de': "Baumwollschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 0,
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86363,
				cardmarket: 275089
			}
		},
	]
}

export default card
