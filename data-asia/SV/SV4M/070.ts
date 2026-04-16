import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バニリッチ",
		th: "วานิริช"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	dexId: [583],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス１００度の 冷気で 敵を 凍らせるが 命までは 奪わない 優しい 気質。",
		th: "ทำให้ศัตรูเย็นเยือกแข็งด้วยไอเย็น -100 องศา แต่ยังมีจิตใจดีไม่ทำให้ถึงแก่ชีวิต"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "フロストスマッシュ",
			th: "ฟรอสต์สแมช"
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