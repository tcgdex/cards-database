import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペンドラー",
	},

	illustrator: "okayamatakatoshi",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'ja-jp': "素早い 動きで 敵を 追い詰め 頭の ツノで 攻撃する。 とどめを 刺すまで 容赦しない。",
	},

	stage: "Stage2",

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
			damage: "90+",
			cost: ["Darkness", "Colorless"],
			effect: { ja: "相手のバトルポケモンがどくなら、90ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "ホイーガ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [545],

	thirdParty: {
		cardmarket: 828563,
		tcgplayer: 636413,
	},
};

export default card;
