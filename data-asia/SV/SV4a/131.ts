import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロローム"
	},

	illustrator: "DOM",
	rarity: "None",
	category: "Pokemon",
	dexId: [966],
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		ja: "ブロロン"
	},

	description: {
		ja: "毒素と 岩の 成分を 混ぜた ガスを ８つに 増えた シリンダーで 爆発させ エネルギーを 作る。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ランブルエンジン"
		},

		effect: {
			ja: "自分の番に、自分の手札からエネルギーを1枚トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		name: {
			ja: "はねとばす"
		},

		effect: {
			ja: "コインを1回投げオモテなら、90ダメージ追加。"
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746513,
				tcgplayer: 567532,
				cardtrader: 269725,
			},
		},
	]
}

export default card
