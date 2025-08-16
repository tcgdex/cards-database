import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Rampardos GL",
		fr: "Charkos  Niv. 63",
		de: "Rameidon GL"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Trample",
				fr: "Bousculade",
				de: "Niederschlagen"
			},
			effect: {
				en: "Flip a coin for each Benched Pokémon (both yours and your opponent's). If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c'est une face, cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wirf für jedes Pokémon auf der Bank (deine und die deines Gegners) jeweils 1 Münze. Dieser Angriff fügt jedem Pokémon, für das auf diese Weise \"Kopf\" geworfen wurde, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Reißer"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 88572
	}
}

export default card
