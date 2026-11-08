import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スナノケガワex",
		'id-id': "Sandy Shocks ex",
		'zh-tw': "沙鐵皮ex",
		'zh-cn': "沙鐵皮ex"
	},

	illustrator: "Tetsu Kayama",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "じりょくきゅうしゅう",
			'id-id': "Isapan Kekuatan Magnet",
			'zh-tw': "磁力吸收",
			'zh-cn': "磁力吸收"
		},

		effect: {
			'ja-jp': "相手のサイドの残り枚数が4枚以下なら、自分の番に1回使える。自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika sisa Kartu Point lawan adalah 4 lembar atau kurang. Pilih 1 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada Pokémon ini.",
			'zh-tw': "若對手剩餘獎賞卡的張數為4張以下，則在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			'zh-cn': "若對手剩餘獎賞卡的張數為4張以下，則在自己的回合時可使用1次。從自己的棄牌區選擇1張「基本【鬥】能量」卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "グラウンドスパイク",
			'id-id': "Ground Spike",
			'zh-tw': "大地扣殺",
			'zh-cn': "大地扣殺"
		},

		damage: 200,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803328,
				tcgplayer: 602679,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card