import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョットex",
		'zh-tw': "大比鳥ex",
		id: "Pidgeot ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マッハサーチ",
			'zh-tw': "音速搜索",
			id: "Mach Search"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。この番、すでに別の「マッハサーチ」を使っていたなら、この特性は使えない。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「音速搜索」，則這個特性無法使用。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jika pada giliran ini, Mach Search lainnya telah digunakan, Ability ini tidak dapat digunakan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふきすさぶ",
			'zh-tw': "狂風呼嘯",
			id: "Angin Menderu"
		},

		damage: 120,

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			id: "Pemain dapat membuang Stadium yang ada di Arena ke Trash."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card