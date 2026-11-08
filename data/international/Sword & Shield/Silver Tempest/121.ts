import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [597],
	set: Set,

	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682168,
				tcgplayer: 451774
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682168,
				tcgplayer: 451774
			}
		},
	],
}

export default card
