import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。"
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

	weaknesses: [{ type: "Darkness", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888633,
				cardtrader: 391494,
				tcgplayer: 695039,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [781],
};

export default card;
