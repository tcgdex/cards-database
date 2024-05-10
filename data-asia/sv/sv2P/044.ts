import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル",
		'zh-tw': "晶光花",
		th: "คิราฟลอร์",
		id: "Glimmora"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "危険を 察知すると 結晶の 花びらを 開いて 円錐形の 体から ビームを 発射する。",
		'zh-tw': "只要察覺到危險，就會張開結晶的花瓣， 從圓錐形的身體發射光束。",
		th: "เมื่อรับรู้ถึงอันตราย ผลึกกลีบดอกไม้จะบานออก และจะยิงลำแสงออกมาจากร่างกายรูปทรงกรวย",
		id: "Jika mendeteksi adanya bahaya, Glimmora membuka kelopak bunga kristalnya dan menembakkan sinar laser dari tubuhnya yang berbentuk kerucut."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くだけるけっしょう",
			'zh-tw': "碎裂結晶",
			th: "ผลึกแตก",
			id: "Kristal Remuk"
		},

		effect: {
			ja: "このポケモンがきぜつしたとき、自分はコインを1回投げる。オモテなら、相手はサイドをとれない。",
			'zh-tw': "這隻寶可夢【昏厥】時，自己擲1次硬幣。若為正面，則對手無法獲得獎賞卡。",
			th: "เมื่อโปเกมอนนี้[หมดสภาพ]แล้ว ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว ฝ่ายตรงข้ามไม่สามารถหยิบการ์ดรางวัลได้",
			id: "Saat Pokémon ini KO, pemain melempar koin 1 kali. Jika hasilnya sisi depan, lawan tidak dapat mengambil Kartu Point."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どくのかべん",
			'zh-tw': "毒花瓣",
			th: "กลีบพิษ",
			id: "Petal Racun"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為6個。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ]นี้จะเป็น 6 ตัว",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun ini adalah 6."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card