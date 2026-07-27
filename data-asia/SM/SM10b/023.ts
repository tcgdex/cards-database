import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "自分の テリトリーを レーダーで 監視 している。 侵入者は 破壊光線で ただちに 処分。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルタイプ" },
			effect: {
				ja: "このポケモンは、場にいるかぎり[雷]と[鋼]の2つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マグネットボルト" },
			damage: 120,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにあるトレーナーズを1枚、相手に見せてから、手札に加える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557223,
			},
		},
	],

	evolveFrom: {
		ja: "レアコイル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [462],
};

export default card;
