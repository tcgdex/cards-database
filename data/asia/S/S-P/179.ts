import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーフィ",
		'zh-tw': "黑魯加",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "額の 珠から サイコパワーを 放射して 戦う。 パワーが つきると 珠の 色が くすむ。",
		'zh-tw': "特徵是令人不寒而慄的長嚎。過去人們認為牠是來自 地獄的使者，對牠十分畏懼。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ねんりき",
				'zh-tw': "暗之牙",
			},
			damage: 20,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "10+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570872,
				tcgplayer: 597377,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [196],
};

export default card;
