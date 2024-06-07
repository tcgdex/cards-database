import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバex",
		'zh-tw': "雄偉牙ex",
		id: "Great Tusk ex"
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
			ja: "ゆさぶりくずす",
			'zh-tw': "搖碎",
			id: "Mengguncang Meruntuhkan"
		},

		effect: {
			ja: "自分の番の終わりに、このポケモンがバトル場にいるなら、必ず1回使う。自分の山札を上から5枚トラッシュする。",
			'zh-tw': "在自己的回合結束時，若這隻寶可夢在戰鬥場上，則一定要使用1次。將自己的牌庫上方5張卡丟棄。",
			id: "Harus digunakan 1 kali pada akhir giliran sendiri jika Pokémon ini ada di Arena Bertarung. Buang 5 kartu dari atas Deck sendiri ke Trash."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "グレートバッシュ",
			'zh-tw': "偉大猛擊",
			id: "Great Bash"
		},

		damage: 260,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card