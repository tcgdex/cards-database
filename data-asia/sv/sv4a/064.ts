import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレズン",
		'zh-tw': "毒電嬰",
		th: "เอเลซัน",
		id: "Toxel"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "汚れた 水を 飲んでも 平気。 体内の 器官で 自分には 無害の 毒液に ろ過するぞ。",
		'zh-tw': "就算喝下污水也能安然無恙。那是因為牠會靠著體內的器官 把污水過濾成對自己無害的毒液。",
		th: "ดื่มน้ำสกปรกได้อย่างสบาย ๆ แล้วกรองเป็นสารพิษที่ไม่เป็นอันตรายต่อตัวเองที่อวัยวะภายใน",
		id: "Toxel tetap baik-baik saja meskipun meminum air kotor. Dengan organ di dalam tubuhnya, Pokémon ini menyaring air tersebut menjadi cairan beracun yang tidak berbahaya bagi dirinya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ちょっとつっこむ",
			'zh-tw': "撞一下",
			th: "จุ้นจ้านหน่อย",
			id: "Gasak Sedikit"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card