import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシー",
		'zh-tw': "妖火紅狐",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "摂氏３０００度の 炎の 渦を 超能力で 操る。 敵を 渦で 包み 焼きつくす。",
		'zh-tw': "能用超能力操控攝氏３０００度的火焰旋渦。用旋渦包圍敵人後將其燒盡。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "フレアパレード",
				'zh-tw': "閃焰遊行",
			},
			damage: "60×",
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある「セレナ」の枚数×60ダメージ。",
				'zh-tw': "造成自己的棄牌區的「莎莉娜」的張數×60點傷害。",
			},
		},
		{
			name: {
				ja: "エナジークラッシュ",
				'zh-tw': "能量粉碎",
			},
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数×50ダメージ。",
				'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673015,
				tcgplayer: 570781,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570871,
			},
		},
	],

	evolveFrom: {
		ja: "テールナー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [655],
};

export default card;
