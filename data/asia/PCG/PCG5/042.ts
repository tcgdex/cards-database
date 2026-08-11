import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミスレアヴァス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [200],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "深い眠り",
			},
			effect: {
				'ja-jp': "Misdreavusがあなたのアクティブなポカモンである限り、各プレイヤーは、ターンの間に眠っている彼または彼女のポカモンのために2つのコインをひっくり返します。いずれかのコインが尾の場合、そのポカンはまだ眠っています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "トランスを返します",
			},
			effect: {
				'ja-jp': "Misdreavusに取り付けられたエネルギーカードを手に返します。防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "夢の食べる人",
			},
			effect: {
				'ja-jp': "防御するポケモンが眠っていない場合、この攻撃は何もしません。",
			},
			damage: 30,
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
