import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "フワンテ",
		'zh-tw': "飄飄球",
		id: "Drifloon"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	dexId: [425],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "風船と 間違えて フワンテを 持っていた 小さな 子どもが 消えてしまうことが あるという。",
		'zh-tw': "據說有些因為誤認成氣球，而把牠拿在手上的小孩， 會就此消失無蹤。",
		id: "Dikabarkan ada kejadian menghilangnya anak kecil yang menyangka Drifloon sebagai balonnya dan membawanya pergi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			id: "Hembusan Angin"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "バルーンボム",
			'zh-tw': "氣球爆破",
			id: "Balloon Bomb"
		},

		damage: "30×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ。",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×30點傷害。",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card