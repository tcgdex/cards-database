import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Hasegawa Saki",

	attacks: [{
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			pt: "Tail Whap",
			de: "Schweifvertrimmer"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder.",
		de: "Es ist sehr vorsichtig und gerissen. Nachdem es Futter stibitzt hat, macht es sich davon und verwischt dabei seine Spuren mit seinem Schweif."
	},

	dexId: [827],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574152,
				tcgplayer: 246903
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574152,
				tcgplayer: 246903
			}
		},
	],
}

export default card
