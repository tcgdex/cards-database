import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "オニスズメ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "食欲旺盛で よく 食べる。 むしポケモンに 悩む 農家は オニスズメを 大切に する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むしをついばむ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[草]ポケモンなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561646,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [21],
};

export default card;
