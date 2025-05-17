import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		es: "Sandslash",
		it: "Sandslash",
		de: "Sandamer",
		'pt-br': "Sandslash",
		ko: "고지"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sandshrew"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The drier the area Sandslash lives in, the harder and smoother the Pokémon's spikes will feel when touched.",
		fr: "Plus son habitat est sec, plus ses épines\ndorsales deviennent dures et lisses.",
		es: "Cuanto más seco es el terreno en el\nque habita, más duras y lisas se vuelven\nlas púas que le recubren la espalda.",
		it: "Più secco è il territorio dove Sandslash vive,\npiù i suoi aculei dorsali diventano lisci e duri.",
		de: "Je trockener das Gebiet ist, in dem Sandamer\nlebt, desto härter und glatter fühlen sich die\nStacheln an seinem Rücken an.",
		'pt-br': "Quanto mais seca for a área onde Sandslash vive,\nmais duros e lisos serão os espinhos deste Pokémon.",
		ko: "습도가 낮은 땅에서 사는\n고지일수록 등에 난 가시의\n감촉은 단단하고 매끄럽다."
	}
}

export default card
