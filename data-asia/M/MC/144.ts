import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラウドボーン",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		ja: "優しい 歌声は 聴いた者の 魂を 癒す。 ３０００度の 炎で 敵を 焼き尽くす。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "てんねん" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フレアリサイタル" },
			damage: "60+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863440,
			},
		},
	],

	evolveFrom: {
		ja: "アチゲータ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [911],
};

export default card;
