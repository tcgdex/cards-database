import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コロモリ",
		'zh-tw': "滾滾蝙蝠",
		th: "โคโรโมริ",
		ko: "또르박쥐"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [527],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "超音波を 放ちながら フラフラと 飛びまわり エサの 虫ポケモンを 探している。",
		'zh-tw': "一邊發出超音波，一邊飛來飛去尋找蟲寶可夢 來填飽自己的肚子。",
		th: "กระพือปีกบินไปพร้อมกับปล่อยคลื่นความถี่สูงเพื่อหาโปเกมอนแมลงที่เป็นเหยื่อของมัน",
		ko: "초음파를 발산하면서 흔들흔들 날아다닌다. 먹이인 벌레포켓몬을 찾고 있다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			ko: "돌격"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			ko: "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741344
	}
}

export default card