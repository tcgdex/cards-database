import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
	},


	name: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		'es-mx': "Ferroseed",
		de: "Kastadur",
		it: "Ferroseed",
		pt: "Ferroseed"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [597],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			'es-mx': "Tacleada Rodante",
			de: "Rolltackle",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante"
		},

		cost: ["Metal", "Metal"],
		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886454,
				tcgplayer: 693485
			}
		},
	],
}

export default card
