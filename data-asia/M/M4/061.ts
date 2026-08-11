import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "トゲで 岩盤に キズを つけると 触手の 先端を あてて 栄養を 吸収する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どっきりおとし" },
			effect: {
				ja: "相手の番に、このカードが相手のワザ・特性・グッズ・サポートの効果で山札からトラッシュされたとき、相手の山札を上から8枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スペシャルウィップ" },
			damage: "70+",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876960,
			},
		},
	],

	evolveFrom: {
		ja: "テッシード",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [598],
};

export default card;
