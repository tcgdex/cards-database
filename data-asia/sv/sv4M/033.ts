import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラ"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [956],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "色とりどりの フリルの 隙間から サイコパワーを 放出して 時速２００キロで 疾走する。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みきわめ"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "グリッターアイズ"
		},

		damage: "70＋",

		effect: {
			ja: "自分のトラッシュに「リップ」があるなら、70ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card