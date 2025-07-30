import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptera",
		de: "Aerodactyl"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Prehistoric Power",
				fr: "Arcane",
				de: "Urzeit-Power"
			},
			effect: {
				en: "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
				fr: "Aucune carte Évolution ne peut être jouée. Ce pouvoir cesse si Ptera est Endormi, Confus ou Paralysé.",
				de: "Es können keine weiteren Evolutionskarten gespielt werden. Diese Fähigkeit verliert ihre Wirkung, solange Aerodactyl schläft, verwirrt oder gelähmt ist."
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
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Flügelschlag"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon préhistorique qui attaque son ennemi à la gorge avec ses crocs acérés."
	},

	thirdParty: {
		cardmarket: 273862,
		tcgplayer: 44418
	}
}

export default card
