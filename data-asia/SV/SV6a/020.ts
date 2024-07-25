import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑夜魔靈"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'zh-tw': "在這個世界與另一個世界間往返。 據說會吸入並帶走遊蕩的靈魂， 因此遭到人們畏懼。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "‌[特性]咒詛炸彈"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置13個傷害指示物。"
		}
	}, {
		name: {
			'zh-tw': "影子束縛"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 150,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare"
}

export default card