import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・テテフ",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "ヒラヒラ 飛びまわり 不思議に 光る 鱗粉を 振りまく。 触れた者は たちまち 元気を 取り戻すという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわす" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "メンタルクラッシュ" },
			damage: "90+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがこんらんなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863644,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [786],
};

export default card;
