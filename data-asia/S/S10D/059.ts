import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "アヤシシV",
		'zh-tw': "詭角鹿V"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [899],
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フロンティアロード",
			'zh-tw': "開拓之路"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			'zh-tw': "在自己的回合，當從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的能量，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			ja: "バリアーラッシュ",
			'zh-tw': "屏障猛攻"
		},

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ。",
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651027,
				tcgplayer: 569814,
				cardtrader: 234195,
			},
		},
	]
}

export default card