import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノカシラ",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "光る 刃を 撃ちだし あたりの すべてを 切り裂いたらしいが ほかに 情報はなく 正体不明。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デリートスラッシュ" },
			damage: "40+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数が3匹以上なら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "スライスブレード" },
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863838,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1023],
};

export default card;
