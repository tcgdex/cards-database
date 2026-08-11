import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Swalot",
		'de-de': "Schlukwech"
	},

	illustrator: "Aya Kusube",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [317],
	
	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gulpin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Damage Roller",
				'de-de': "Schadenswalze"
			},
			effect: {
				'en-us': "Put damage counters on the Defending Pokémon until the Defending Pokémon has the same remaining HP as Swalot. (If the Defending Pokémon has the same or less remaining HP as Swalot, this attack does nothing.)",
				'de-de': "Lege so viele Schadensmarken auf das Verteidigende Pokémon, bis das Verteidigende Pokémon gleich viel verbliebene KP hat wie Schlukwech. (Wenn das Verteidigende Pokémon nicht mehr verbliebene KP hat als Schlukwech, hat dieser Angriff keine Auswirkungen.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Entangle Tackle",
				'de-de': "Einschnürtackle"
			},
			effect: {
				'en-us': "You may do 50 damage plus 30 more damage. If you do, this attack does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
				'de-de': "Du kannst mit diesem Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieser Angriff 1 deiner Pokémon 30 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It swallows anything whole. It sweats toxic fluids from its follicles to douse foes."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89674,
				cardmarket: 278881
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125057
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278881,
				tcgplayer: 89674
			}
		},
	],

}

export default card
