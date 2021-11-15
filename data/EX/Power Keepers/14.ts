import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dark Mind",
				fr: "Sombre-esprit"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mysterious Light",
				fr: "Lumière mystérieuse"
			},
			effect: {
				en: "If Phoebe's Stadium is in play, the Defending Pokémon is now Confused.",
				fr: "Si Stade de Spectra est en jeu, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
