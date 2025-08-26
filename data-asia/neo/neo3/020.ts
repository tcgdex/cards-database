import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "遺伝的記憶",
			},
			effect: {
				ja: "Kingdraの基本的なポケモンカードまたはEvolutionカードからの攻撃を使用してください。 （Kingdraは、その攻撃のエネルギーコストを支払う必要はありません。）",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "ツイスター",
			},
			effect: {
				ja: "2つのコインをフリップします。ヘッドごとに、ディフェンディングポケモンに添付された1枚のエネルギーカードを選択して、捨てます。両方が尾の場合、この攻撃は何もしません（損傷さえありません）。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
