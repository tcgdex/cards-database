import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Umbreon ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "暗いリング",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）、あなたがあなたの手からUmbreon Exをプレイするとき、あなたのポカモンの1つを進化させるとき、あなたの対戦相手のベンチされたポカモンの1つのスイッチ1を防御するポカモンの1つと、対戦相手は、防御するポカモンを選択して切り替えます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ブラッククライ",
			},
			effect: {
				'ja-jp': "防御するポケモンは、相手の次のターン中にポケパワーを退却したり、使用したりすることはできません。",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'ja-jp': "闇の牙",
			},
			damage: 60,
		},
	],

	retreat: 1,

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
