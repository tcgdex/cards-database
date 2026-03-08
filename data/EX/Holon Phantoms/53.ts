import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Sharpedo δ",
		fr: "Sharpedo δ",
		de: "Tohaido"
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
		en: "Carvanha",
		fr: "Carvanha"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brush Aside",
				fr: "Repousser",
				de: "Wegstoßen"
			},
			effect: {
				en: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Si Sharpedo possède des cartes Énergie Holon, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				de: "Wenn an Tohaido eine Holon-Energiekarte angelegt ist, wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Dein Gegner legt diese Karte auf seinen Ablagestapel."
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
				en: "Swift Turn",
				fr: "Tour express",
				de: "Schnelle Wende"
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède une Résistance , cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon -Resistenz hat, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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
