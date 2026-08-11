import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "entei",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "ハウル",
			},
			effect: {
				'ja-jp': "あなたがあなたの手からenteiをプレイするとき、あなたはあなたのデッキのトップ5カードを捨てることができます。 <em>（それよりもデッキにカードが少ない場合は、それらすべてを捨ててください。）</em>それらのいずれかがファイアエネルギーカードである場合は、選択したファイアポケモンのいずれかに添付してください。このパワーを使用して、順番を終了します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "炎を焼きます",
			},
			effect: {
				'ja-jp': "Enteiに取り付けられた2つのファイヤーエネルギーカードを廃棄すると、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
