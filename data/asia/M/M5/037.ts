import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダダリン",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むねんのイカリ" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分のトラッシュに、特性「ばけがくれ」を持つポケモンが4枚以上あるなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888280,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [781],
};

export default card;
