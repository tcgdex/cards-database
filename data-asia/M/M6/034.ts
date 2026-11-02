import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ラブトロス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "海を越えて 飛来したらば 厳しき冬の 終わりを知る。 慈愛が ヒスイの地に 新しき命 芽吹かせるとの 伝承あり。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "けしんだんけつ" },
			effect: {
				ja: "自分の場に「トルネロス」「ボルトロス」「ランドロス」「ラブトロス」がいるなら、このポケモンはワザを使うための[C]エネルギーが、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライジングハート" },
			damage: "100+",
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899937,
				tcgplayer: 709188,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [905],
};

export default card;
