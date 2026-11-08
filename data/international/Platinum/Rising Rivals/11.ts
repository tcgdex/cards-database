import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Rampardos GL",
		'fr-fr': "Charkos  Niv. 63",
		'de-de': "Rameidon GL"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [409],

	hp: 90,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Trample",
				'fr-fr': "Bousculade",
				'de-de': "Niederschlagen"
			},
			effect: {
				'en-us': "Flip a coin for each Benched Pokémon (both yours and your opponent's). If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c'est une face, cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wirf für jedes Pokémon auf der Bank (deine und die deines Gegners) jeweils 1 Münze. Dieser Angriff fügt jedem Pokémon, für das auf diese Weise \"Kopf\" geworfen wurde, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278585,
				tcgplayer: 88572
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278585,
				tcgplayer: 88572
			}
		},
	],

}

export default card
