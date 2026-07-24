import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ストライク",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "若いうちは 山奥で 群れて 暮らし 鎌での 戦いかたや 高速移動を 修行する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくぎり" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、50ダメージ追加。すべてオモテなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558640,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [123],
};

export default card;
