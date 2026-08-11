import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
	},


	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'es-mx': "Ferroseed",
		'de-de': "Kastadur",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed"
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
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'es-mx': "Tacleada Rodante",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante"
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
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886454,
				tcgplayer: 693485
			}
		},
	],
}

export default card
