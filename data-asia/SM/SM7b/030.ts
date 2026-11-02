import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Fairy"],

	description: {
		ja: "未来を 予知する 力を 持つ。 トレーナーを 守る ときに 最大 パワーを 発揮する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ブリリアントサーチ" },
			cost: ["Fairy"],
			effect: {
				ja: "自分の山札にある好きなカードを3枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "センシングレイ" },
			damage: "70+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558855,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [282],
};

export default card;
