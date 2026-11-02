import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタV",
		'zh-tw': "藏瑪然特V",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "おうじゃのかまえ",
				'zh-tw': "王者之勢",
			},
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の手札をすべてトラッシュし、山札を5枚引く。",
				'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。將自己的手牌全部丟棄，從牌庫抽出5張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "リベンジバースト",
				'zh-tw': "復仇暴擊",
			},
			damage: "120+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×30ダメージ追加。",
				'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687794,
				tcgplayer: 571770,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [889],
};

export default card;
