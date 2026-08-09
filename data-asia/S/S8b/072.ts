import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロ",
		'zh-tw': "烏賊王",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "歴史を 変えるほどの 大事件は カラマネロの 催眠能力が かかわっていたと いわれている。",
		'zh-tw': "據說那些能夠改變歷史的重大事件其實都和 烏賊王的催眠能力有關。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "れんげきテンタクル",
				'zh-tw': "連擊觸手",
			},
			damage: "40×",
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札から「れんげき」のカードを好きなだけ相手に見せて、その枚数×40ダメージ。その後、見せた「れんげき」のカードを山札にもどして切る。",
				'zh-tw': "從自己的手牌將任意數量的「連擊」卡給對手看過後，造成其張數×40點傷害。然後，將給對手看過的「連擊」卡放回牌庫並重洗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586588,
				tcgplayer: 571325,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578390,
			},
		},
	],

	evolveFrom: {
		ja: "マーイーカ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "None",
	dexId: [687],
};

export default card;
