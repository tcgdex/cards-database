import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ バクフーン",
		'zh-tw': "洗翠 火爆獸"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [157],
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		ja: "マグマラシ"
	},

	description: {
		ja: "ヒスイの中心にそびえし 霊山の気が 影響した姿と 考察。 行き場 失いし 霊魂を 己の炎で浄化し 送ると言う。",
		'zh-tw': "據考察，牠是受到聳立於洗翠中心的靈山所發之氣的影響，才形成了現在的模樣。據說會用 自己的火焰淨化並超渡無處可去的靈魂。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あやかしだま",
			'zh-tw': "靈異彈"
		},

		effect: {
			ja: "自分の番に、自分の手札から{P}エネルギーを1枚トラッシュするなら、1回使える。相手のバトルポケモンをやけどとこんらんにする。",
			'zh-tw': "在自己的回合，若從自己的手牌將1張【超】能量卡丟棄，則可使用1次。將對手的戰鬥寶可夢【灼傷】與【混亂】。"
		}
	}],

	attacks: [{
		name: {
			ja: "かげしばり",
			'zh-tw': "影子束縛"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650986,
				tcgplayer: 569778,
				cardtrader: 234089,
			},
		},
	]
}

export default card