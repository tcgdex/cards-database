import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "サッチムシ",
		'zh-tw': "索偵蟲",
		th: "ซัจจิมุชิ",
		ko: "두루지벌레"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [824],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "畑で よく見かける ポケモン。 体に 生えた 毛で まわりで 起きていることを 感じとる。",
		'zh-tw': "經常出現在田地裡的寶可夢。會透過長在身體上的毛來感應周圍發生的事。",
		th: "เป็นโปเกมอนที่พบเห็นได้บ่อยตามทุ่งนา รับรู้ความรู้สึกของสิ่งที่เกิดขึ้นรอบตัวได้ด้วยขนที่ขึ้นตามร่างกาย",
		ko: "밭에서 자주 보이는 포켓몬이다. 몸에 난 털로 주위에서 일어나는 일을 감지한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน",
			ko: "허찌르기"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card