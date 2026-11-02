import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "タギングルex",
		'zh-tw': "沼王",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "しびれるだえき",
				'zh-tw': "滾動",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: {
				ja: "ポイポポイズン",
				'zh-tw': "濕透頭擊",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の自分の番、このポケモンは「ポイポポイズン」が使えない。",
				'zh-tw': "將自己的牌庫上方3張卡丟棄，造成其中能量卡的張數×80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719857,
				tcgplayer: 587846,
			},
		},
	],

	evolveFrom: {
		ja: "シルシュルー",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [945],

	suffix: "EX",
};

export default card;
