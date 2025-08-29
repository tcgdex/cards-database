import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くカブトップ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Lightning"],
			name: {
				ja: "稲妻カット",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は30のダメージを与え、輝くカブトップはそれ自体に10ダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Water", "Water"],
			name: {
				ja: "ウォータースラッシュ",
			},
			effect: {
				ja: "50のダメージに加えて、輝くカブトップに付着した水エネルギーごとにさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。抵抗を適用しないでください。",
			},
		},
	],

	retreat: 2,

};

export default card
