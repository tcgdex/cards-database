import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハリーセン",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "毒針を 撃ち出した 直後の 無防備な 状態を 狙うと ベテランの 漁師は 語る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "30+",
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンがどくなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876950,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [211],
};

export default card;
