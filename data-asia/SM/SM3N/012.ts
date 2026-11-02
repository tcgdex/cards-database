import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ハギギシリ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "頭の 突起から サイコパワーを 放つとき とても 耳障りな 歯ぎしりの 音が あたりに 響く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はぎしり" },
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "シンクロノイズ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンと同じタイプの、相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561012,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [779],
};

export default card;
