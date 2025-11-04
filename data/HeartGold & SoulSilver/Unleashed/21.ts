import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Steamroll",
				fr: "Rouleau compresseur",
				de: "Überrollen"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à l’un des Pokémon se trouvant sur le Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamo-poing",
				de: "Wuchtschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 40 more damage and the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 60 Schadenspunkte plus 40 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["staff"],
		},
	],

	thirdParty: {
		cardmarket: 279177,
		tcgplayer: 88279
	}
}

export default card
