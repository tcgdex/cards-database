import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},
	illustrator: "Hiroki Asanuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Slash",
				fr: "Tranche Acier",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-EX.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-EX.",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
			},
			effect: {
				en: "This Pokémon can't use Slashing Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
