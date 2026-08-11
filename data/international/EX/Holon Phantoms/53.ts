import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Sharpedo δ",
		'fr-fr': "Sharpedo δ",
		'de-de': "Tohaido"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brush Aside",
				'fr-fr': "Repousser",
				'de-de': "Wegstoßen"
			},
			effect: {
				'en-us': "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Si Sharpedo possède des cartes Énergie Holon, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wenn an Tohaido eine Holon-Energiekarte angelegt ist, wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt diese Karte auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift Turn",
				'fr-fr': "Tour express",
				'de-de': "Schnelle Wende"
			},
			effect: {
				'en-us': "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède une Résistance , cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon -Resistenz hat, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277023
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
