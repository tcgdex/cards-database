import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		es: "Cacturne",
		it: "Cacturne",
		pt: "Cacturne",
		de: "Noktuska"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Rapid-Fire Needles",
				fr: "Salve d'Aiguilles",
			},
			effect: {
				en: "Does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 30 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 60 more damage and discard an Energy attached to the Defending Pokémon.",
				fr: "S'il ne reste qu'une seule carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires et vous défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280888
	}
}

export default card
