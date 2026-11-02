import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "クリムガン",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "赤い 顔の 皮膚は 岩よりも 硬い。 狭い 洞窟の 中で 敵に 向かって 顔から 突撃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきずりだす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
			},
		},
		{
			name: { ja: "ドラゴンテール" },
			damage: "100×",
			cost: ["Fire", "Water", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557234,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [621],
};

export default card;
