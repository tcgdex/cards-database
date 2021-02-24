import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi Niv. 39",
	},
	illustrator: "Kenkichi Toyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Final Wish",
				fr: "Dernier souhait",
			},
			effect: {
				en: "Once during your opponent's turn, if Jirachi would be Knocked Out by damage from an attack, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors du tour de votre adversaire, si Jirachi est mis K.O par des dégâts d'une attaque, vous pouvez choisir 1 carte dans votre deck et la placer dans votre main. Ensuite, mélangez votre deck.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Detour",
				fr: "Détour",
			},
			effect: {
				en: "If you have a Supporter card in play, use the effect of that card as the effect of this attack.",
				fr: "Si vous avez une carte Supporter en jeu, utilisez l'effet de cette carte comme l'effet de cette attaque.",
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Swift",
				fr: "Météores",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
