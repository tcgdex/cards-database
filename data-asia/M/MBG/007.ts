import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソル"
	},

	illustrator: "Takumi Wada",
	rarity: "None",
	category: "Pokemon",
	dexId: [359],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "危険を 察知する 能力を 持つがゆえに 人からは 災いを もたらす ポケモンと 誤解された。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ひきつける"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ダークカッター"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846824,
				tcgplayer: 660124,
				cardtrader: 345815,
			},
		},
	]
}

export default card
