import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Bastiodon",
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Shieldon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Wall",
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent’s attacks.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Anger Revenge",
			},
			effect: {
				en: "If Bastiodon was damaged by an attack during your opponent’s last turn, this attack does 40 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		en: "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries."
	},

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277886
	}
}

export default card
