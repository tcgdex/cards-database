import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Dark Ivysaur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 50,

	dexId: [2],

	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Vine Pull"
		},

		effect: {
			en: "Once during your turn when Dark Ivysaur retreats, choose 1 of your opponent’s Benched Pokémon and switch it with his or her Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Fury Strikes"
		},

		effect: {
			en: "Your opponent puts 3 markers onto his or her Pokémon (divided as he or she chooses). (More than 1 marker can be put on the same Pokémon.) Then, this attack does 10 damage to each Pokémon for each marker on it. Don’t apply Weakness and Resistance. Remove the markers at the end of the turn."
		}
	}],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275416,
				tcgplayer: 84616
			},
		},
		{
			type: "normal",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 107876
			},
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo",
			thirdParty: {
				tcgplayer: 180262
			},
		}
	]
}

export default card
