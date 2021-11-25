import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [{
		cost: [
			"Metal",
		],
		name: {
			en: "Precognitive Dream",
			fr: "Rêve Prémonitoire",
		},
		effect: {
			en: "Draw 3 cards. This Pokémon is now Asleep.",
			fr: "Piochez 3 cartes. Ce Pokémon est maintenant Endormi.",
		},

	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tête de Fer"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
		},

		damage: "30×"
	}],
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
	retreat: 1,



}

export default card
