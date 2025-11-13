import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "アルカニンEx",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "火の治療法",
			},
			effect: {
				ja: "手からアルカニンEXに火エネルギーを取り付けるときはいつでも、Arcanine Exから1つのダメージカウンターとすべての特別な条件を削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "オーバーラン",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "炎の渦巻き",
			},
			effect: {
				ja: "Arcanine Exに取り付けられた2つの火エネルギーまたは1つの反応エネルギーカードを捨てます。",
			},
			damage: 100,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
