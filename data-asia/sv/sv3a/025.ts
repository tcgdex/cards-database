import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "硬い 皮膚に 覆われているので 車と ぶつかっても へっちゃら。 ただし 雨には めっぽう 弱い。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "やまなだれ"
		},

		damage: 30,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "だいかいてん"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card