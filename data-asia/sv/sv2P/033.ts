import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチルゼル"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [576],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放ち 相手に 宇宙が 終わる 夢を 見せる。 それは 儚く 美しいらしい。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ほしよみ"
		},

		effect: {
			ja: "自分の番に1回使える。相手の山札を上から2枚見て、どちらか1枚を選び、山札の上にもどす。残りのカードは、山札の下にもどす。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコアウト"
		},

		damage: 120,

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card