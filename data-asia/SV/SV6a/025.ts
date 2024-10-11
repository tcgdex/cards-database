import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガチグマ アカツキ"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [901],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "鉄のように 硬い 泥で 身を 守り 闇を 見通す 左目を 持つ 特別な ガチグマ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "けいけんそく"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から「基本エネルギー」を2枚まで選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マッドバイト"
		},

		damage: "100＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card