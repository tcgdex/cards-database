import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克鷹"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "變成姆克鷹後，就會脫離群體獨自生活。擁有強韌的翅膀。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "颶風攪拌"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量，以任意方式改附於自己的寶可夢身上。"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "勇鳥猛攻"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 170,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
