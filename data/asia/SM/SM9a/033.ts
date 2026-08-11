import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "１キロ先で 針が 落ちた 音も 聞こえてしまうので 人やポケモンが 少ない 深い山奥で 暮らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おつきみダンス" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "自分の場の[妖]エネルギーがついているポケモンの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558220,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [36],
};

export default card;
