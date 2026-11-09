import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1004],
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "ねたみこがす"
		},

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		},
		cost: ["Fire"]
	}, {
		name: {
			ja: "フレイムサージ"
		},

		effect: {
			ja: "自分のベンチポケモンを3匹まで選び、山札から「基本{R}エネルギー」を1枚ずつつける。そして山札を切る。"
		},

		damage: 100,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747710,
				tcgplayer: 567753,
				cardtrader: 270351,
			},
		},
	]
}

export default card