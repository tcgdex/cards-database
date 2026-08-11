import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波士可多拉"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'zh-tw': "如果因土石流或山林火災導致山變得荒蕪，牠就會不斷運來土壤，種上樹苗，把自己的地盤打掃得漂漂亮亮。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "結實"
		},

		effect: {
			'zh-tw': "這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【氣絕】時，這隻寶可夢不會【氣絕】，而是以剩餘HP為「10」的狀態留在場上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "億萬噸重壓"
		},

		damage: 160,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
