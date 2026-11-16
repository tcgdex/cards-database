import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "イトマル",
		'zh-tw': "圓絲蛛"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [167],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "キバの 毒は さほど 強くないが 巣に かかって 動けない 獲物を 弱らせるには 充分。",
		'zh-tw': "牙齒的毒性並不強烈， 但用來削弱那些掛在蛛網上 無法動彈的獵物是綽綽有餘。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "どくばり",
			'zh-tw': "毒針"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651007,
				tcgplayer: 569794,
				cardtrader: 234105,
			},
		},
	]
}

export default card