import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Porygon2",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Converter",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 Basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end is your turn. This power can't be used if Porygon2 is Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Beam",
			},
			effect: {
				en: "Flip a coin. If heads, choose whether the Defending Pokémon becomes Asleep, Confused, or Paralyzed.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
