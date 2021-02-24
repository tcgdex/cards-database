import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		368,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Sweet Temptation",
				fr: "Douce tentation",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This attack does 10 damage to the new Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Cette attaque inflige 10 dégâts au nouveau Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Psychic Snap",
				fr: "Claquement psy",
			},
			effect: {
				en: "If Gorebyss has any Psychic Energy attached to it, this attack does 30 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Si Rosabyss possède de l'Énergie Psychic, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
