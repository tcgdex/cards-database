import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'de-de': "Zwirrlicht",
		'pt-br': "Duskull",
		'ko-kr': "해골몽"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [355],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "If it finds bad children who won't listen to their parents, it will spirit them away—or so it's said.",
		'fr-fr': "On dit que ce Pokémon emporte les\nenfants désobéissants à la nuit tombée.",
		'es-es': "Corre el rumor de que, por las noches,\nse lleva a los niños que no son obedientes.",
		'it-it': "Si racconta che questo Pokémon porti via nella\nnotte i bambini che sono stati disobbedienti.",
		'de-de': "Man sagt, es suche sich unartige Kinder und\nverschleppe sie nachts an einen unbekannten Ort.",
		'pt-br': "Captura crianças malcriadas que não obedecem aos pais.\nOu pelo menos é o que dizem.",
		'ko-kr': "말을 잘 안 듣는 아이를\n발견하면 한밤중에 어딘가로\n데려간다고 전해진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'de-de': "Irrlicht",
			'pt-br': "Fogo Fátuo",
			'ko-kr': "도깨비불"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
