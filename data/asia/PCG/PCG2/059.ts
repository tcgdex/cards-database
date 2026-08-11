import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "スレーキング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [289],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "怠zyなオーラ",
			},
			effect: {
				ja: "スレーキングがあなたのアクティブなポカモンである限り、相手のpokã©mon-exからの攻撃によって与えられた損害は30減少します（脱力感と抵抗を適用する前に）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "健忘症",
			},
			effect: {
				ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "怠惰なヘッドバット",
			},
			effect: {
				ja: "スレーキングは今眠っています。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
