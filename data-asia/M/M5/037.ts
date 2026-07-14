import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むねんのイカリ" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュに、特性「ばけがくれ」を持つポケモンが4枚以上あるなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [781],

	thirdParty: {
		cardmarket: 888280,
	},
};

export default card;
