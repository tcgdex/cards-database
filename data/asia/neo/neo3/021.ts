import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "suicune",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [245],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				'ja-jp': "クリスタルボディ",
			},
			effect: {
				'ja-jp': "Suicuneに対して行われた損害以外の相手の攻撃のすべての影響を防ぎます。 Suicuneが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "オーロラの波",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは現在麻痺しています。ヘッドが1つだけである場合、防御ポケモンは今眠っています。",
			},
			damage: 30,
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
