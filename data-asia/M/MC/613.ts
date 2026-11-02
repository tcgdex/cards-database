import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "群れを 作らず 静かに 暮らす。 集団で 騒ぐ オコリザルは 天敵で いつも 争いになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ライジングタックル" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863915,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [701],
};

export default card;
