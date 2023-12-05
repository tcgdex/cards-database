import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina Niv. 29",
		de: "Nidorina"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		30,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Jump Tackle",
				fr: "Charge aérienne",
				de: "Sprungtackle"
			},
			effect: {
				en: "Nidorina does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				fr: "Nidorina s'inflige 10 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
				de: "Nidorina fügt sich selbst 10 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stress Poison",
				fr: "Poison de stress",
				de: "Belastungsgift"
			},
			effect: {
				en: "If Nidorina has any damage counters on it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Si Nidorina possède des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wenn auf Nidorina mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
