import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "レディアン",
		'zh-tw': "安瓢蟲",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "きらめく 粉を 振りまきながら 夜空を 飛ぶ。 粉が 身体に つくと いいことが あるといわれる。",
		'zh-tw': "一邊撒落閃閃發亮的粉末，一邊在夜空中飛翔。據說如果身上沾到這種粉末，就會有好事發生。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "クイックドロー",
				'zh-tw': "快速抽出",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
		{
			name: {
				ja: "エアスラッシュ",
				'zh-tw': "空氣斬",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560529,
				tcgplayer: 569230,
			},
		},
	],

	evolveFrom: {
		ja: "レディバ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [166],
};

export default card;
