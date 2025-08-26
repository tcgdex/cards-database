import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽アルカニン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ドライブします",
			},
			effect: {
				ja: "軽いアルカニンがあなたのアクティブなポクモンである限り、ターン<em>（攻撃の前に）</em>の間に一度、相手がベンチを持っている場合、彼または彼女はそれらの1つを選択し、ディフェンディングポクモンと交換します。軽いアルカニンが眠ったり、混乱したり、麻痺したりしている間、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "穏やかな炎",
			},
			effect: {
				ja: "防御ポケモンがベビーポケモンの場合、この攻撃は50ではなく10ダメージを与えます。防御ポケモンが基本的なポケモンである場合、この攻撃は50ではなく30のダメージを与えます。",
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
