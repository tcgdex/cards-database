import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "むらさきのミツを 吸った オドリドリ。 雅で あでやかな 舞は 敵の 身も 心も 異界へ 誘う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやかしのまい" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のトラッシュにあるポケモンの枚数ぶんのダメカンを、相手のポケモンに好きなようにのせる。",
			},
		},
		{
			name: { ja: "めざめるダンス" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "場にスタジアムが出ていないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560075,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [741],
};

export default card;
