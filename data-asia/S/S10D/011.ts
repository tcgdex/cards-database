import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロモ",
		'zh-tw': "蚊香蝌蚪"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "歩くよりも 泳ぐほうが 得意。 お腹の 渦巻き模様は 透けて 見える 内臓の 一部だ。",
		'zh-tw': "比起步行更擅長游泳。腹部的漩渦花紋是透過皮膚 可以看到的部分內臟。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "はねてかわす",
			'zh-tw': "躍起閃避"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650971,
				tcgplayer: 569766,
				cardtrader: 234077,
			},
		},
	]
}

export default card