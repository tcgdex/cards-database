import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		'zh-tw': "毛崖蟹"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [950],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "アドレナハンマー",
			'zh-tw': "腎上腺錘"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card