import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "レドームシ",
		th: "เรโดมุชิ",
		ko: "레돔벌레"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	dexId: [825],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		th: "กำลังเติบโตอยู่ในกระดอง รับรู้สภาพการณ์ภายนอกด้วยพลังจิต กำลังเตรียมตัวเพื่อวิวัฒนาการ",
		ko: "껍질 안에서 성장 중이다. 사이코 파워로 밖의 상태를 살피며 진화에 대비하고 있다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まもる",
			th: "ป้องกันตัว",
			ko: "방어"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "しねんのずつき",
			th: "โขกหัวพลังจิต"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card