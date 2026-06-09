import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニリッチ",
		'zh-tw': "多多冰",
		th: "วานิริช",
		ko: "바닐리치"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	dexId: [583],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス１００度の 冷気で 敵を 凍らせるが 命までは 奪わない 優しい 気質。",
		'zh-tw': "性情和善，雖然會用零下１００度的冷氣凍住敵人，但並不會傷及牠們的性命。",
		th: "ทำให้ศัตรูเย็นเยือกแข็งด้วยไอเย็น -100 องศา แต่ยังมีจิตใจดีไม่ทำให้ถึงแก่ชีวิต",
		ko: "마이너스 100도의 냉기로 적을 얼리지만 목숨은 뺏지 않는 상냥한 기질을 가졌다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "フロストスマッシュ",
			'zh-tw': "冰霜粉碎",
			th: "ฟรอสต์สแมช",
			ko: "프로스트 스매시"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741845
	}
}

export default card