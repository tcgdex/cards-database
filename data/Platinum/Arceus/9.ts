import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Swalot",
		de: "Schlukwech"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],
	
	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gulpin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Damage Roller",
				de: "Schadenswalze"
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until the Defending Pokémon has the same remaining HP as Swalot. (If the Defending Pokémon has the same or less remaining HP as Swalot, this attack does nothing.)",
				de: "Lege so viele Schadensmarken auf das Verteidigende Pokémon, bis das Verteidigende Pokémon gleich viel verbliebene KP hat wie Schlukwech. (Wenn das Verteidigende Pokémon nicht mehr verbliebene KP hat als Schlukwech, hat dieser Angriff keine Auswirkungen.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Entangle Tackle",
				de: "Einschnürtackle"
			},
			effect: {
				en: "You may do 50 damage plus 30 more damage. If you do, this attack does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
				de: "Du kannst mit diesem Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieser Angriff 1 deiner Pokémon 30 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
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

	thirdParty: {
		cardmarket: 278881,
		tcgplayer: 89674
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
