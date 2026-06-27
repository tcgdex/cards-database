import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [597],
	set: Set,

	name: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		it: "Ferroseed",
		pt: "Ferroseed",
		de: "Kastadur"
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
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
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
		en: "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
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
