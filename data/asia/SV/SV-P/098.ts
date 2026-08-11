import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "名探偵ピカチュウ",
		'zh-tw': "拉帝亞斯",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "調査には 根気が 必要。 粘り強い調査で 事件の手がかりを 探し出せ！",
		'zh-tw': "透過心靈感應和人類交流情感。 會用能令光線折射的羽毛 變化成其他的樣子。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "てっていちょうさ",
				'zh-tw': "0",
			},
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
				'zh-tw': "‌若這隻寶可夢身上附有【超】能量，則將這隻寶可夢【撤退】所需的能量全部消除。",
			},
		},
		{
			name: { ja: "ライドダッシュ" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727072,
				tcgplayer: 587856,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [25],
};

export default card;
