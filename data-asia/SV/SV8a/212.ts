import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニンフィアex",
		id: "Sylveon ex",
		'zh-tw': "仙子伊布ex",
		'zh-cn': "仙子伊布ex"
	},

	illustrator: "Cona Nitanda",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルチャーム",
			id: "Magical Charm",
			'zh-tw': "魔法魅惑",
			'zh-cn': "魔法魅惑"
		},

		damage: 160,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 100.",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-100」點。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-100」點。"
		}
	}, {
		cost: ["Water", "Lightning", "Psychic"],

		name: {
			ja: "エンジェライト",
			id: "Angelite",
			'zh-tw': "天仙石",
			'zh-cn': "天仙石"
		},

		effect: {
			ja: "相手のベンチポケモンを2匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。前の自分の番に、自分のポケモンが「エンジェライト」を使っていたなら、このワザは使えない。",
			id: "Pilih 2 Pokémon Cadangan lawan, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck. Serangan ini tidak dapat digunakan jika pada giliran sendiri sebelumnya, Pokémon sendiri telah menggunakan Angelite.",
			'zh-tw': "選擇2隻對手的備戰寶可夢，將那些寶可夢與附加的卡全部放回牌庫並重洗。在上個自己的回合，若自己的寶可夢使出了「天仙石」，則無法使用這個招式。",
			'zh-cn': "選擇2隻對手的備戰寶可夢，將那些寶可夢與附加的卡全部放回牌庫並重洗。在上個自己的回合，若自己的寶可夢使出了「天仙石」，則無法使用這個招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card