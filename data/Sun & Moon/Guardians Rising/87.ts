import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 160,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Shining Arrow",
				fr: "Flèche Brillante",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Fangs of the Sunne",
				fr: "Crocs du Halo Solaire",
			},
			effect: {
				en: "This Pokémon can't use Fangs of the Sunne during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Crocs du Halo Solaire pendant votre prochain tour.",
			},
			damage: 170,

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
	retreat: 3,



}

export default card
