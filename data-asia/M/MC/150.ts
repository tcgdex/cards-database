import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウガツホムラ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "目撃報告は ごくわずか。 火柱を 噴き 暴れる 姿の 短い 映像が 存在する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきたおし" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "えんじょうとつげき" },
			damage: "100+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が4枚以下なら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863446,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1020],
};

export default card;
