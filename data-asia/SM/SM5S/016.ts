import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "腕先から 摂氏２０００度の 火の玉を 発射。 連射を すると 腕先が 少し 溶ける。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しゃくねつボディ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ファイヤーガン" },
			damage: "80+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、2個トラッシュする。その場合、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559970,
			},
		},
	],

	evolveFrom: {
		ja: "ブーバー",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [467],
};

export default card;
