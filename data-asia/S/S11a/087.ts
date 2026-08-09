import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ロコンVSTAR",
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "スノーミラージュ" },
			damage: 160,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。次の相手の番、このポケモンは特性を持つポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ぎんせつスター" },
			damage: "70×",
			cost: [],
			effect: {
				ja: "相手の場の「ポケモンV」の数×70ダメージ。このワザのダメージは弱点・抵抗力を計算しない。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673404,
				tcgplayer: 570850,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコンV",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [37],
};

export default card;
