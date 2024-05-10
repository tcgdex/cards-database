import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビードル",
		'zh-tw': "獨角蟲",
		th: "บีเดิล",
		id: "Weedle"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	dexId: [13],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "毒針は とても 強力。 目立つ 体の 色は 相手に 警戒を させるためだ。",
		'zh-tw': "毒針非常厲害。 鮮豔的體色是用來 警告對手的。",
		th: "เข็มพิษมันมีพิษรุนแรงมาก สีสันตามตัวที่ดูเด่นสะดุดตาก็เพื่อทำให้ฝ่ายตรงข้ามคอยระวังตัว",
		id: "Jarum beracun Weedle sangat kuat. Warna tubuhnya yang mencolok membuat lawan menjadi waspada."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card