import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina Niv. 29",
		'de-de': "Nidorina"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [30],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran♀"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Jump Tackle",
				'fr-fr': "Charge aérienne",
				'de-de': "Sprungtackle"
			},
			effect: {
				'en-us': "Nidorina does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Nidorina s'inflige 10 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Nidorina fügt sich selbst 10 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
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
				'en-us': "Stress Poison",
				'fr-fr': "Poison de stress",
				'de-de': "Belastungsgift"
			},
			effect: {
				'en-us': "If Nidorina has any damage counters on it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si Nidorina possède des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wenn auf Nidorina mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
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

	description: {
		'en-us': "When it senses danger, it raises all the barbs on its body. These barbs grow slower than NIDORINO's."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87737,
				cardmarket: 278647,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278647,
				tcgplayer: 87737
			}
		},
		{
			type: "normal",
			stamp: ["jason-martinez"],
			thirdParty:{
				cardmarket: 868911,
				tcgplayer: 479932
			}
		}
	],

}

export default card
