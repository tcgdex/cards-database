import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イダイナキバex",
		'zh-tw': "雄偉牙ex",
		'id-id': "Great Tusk ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ゆさぶりくずす",
			'zh-tw': "搖碎",
			'id-id': "Mengguncang Meruntuhkan"
		},

		effect: {
			'ja-jp': "自分の番の終わりに、このポケモンがバトル場にいるなら、必ず1回使う。自分の山札を上から5枚トラッシュする。",
			'zh-tw': "在自己的回合結束時，若這隻寶可夢在戰鬥場上，則一定要使用1次。將自己的牌庫上方5張卡丟棄。",
			'id-id': "Harus digunakan 1 kali pada akhir giliran sendiri jika Pokémon ini ada di Arena Bertarung. Buang 5 kartu dari atas Deck sendiri ke Trash."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "グレートバッシュ",
			'zh-tw': "偉大猛擊",
			'id-id': "Great Bash"
		},

		damage: 260,

		effect: {
			'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747684,
				tcgplayer: 567730,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card