import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		de: "Knuddeluff",
		'pt-br': "Wigglytuff",
		ko: "푸크린"
	},

	illustrator: "Tomowaka",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Jigglypuff"
	},

	description: {
		en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
		fr: "Il a une très belle fourrure. Mieux vaut éviter de le mettre\nen colère, ou il gonflera avant d'attaquer de tout son corps.",
		es: "Tiene un pelaje muy fino. Se recomienda no enfadarlo,\no se inflará y golpeará con todo su cuerpo.",
		it: "Ha un pelo molto fino. Attenzione a non farlo adirare,\nperché può gonfiarsi e caricare con tutto il suo peso.",
		de: "Es hat sehr feines Fell. Doch Vorsicht: Verärgert\nman Knuddeluff, bläst es sich stark auf und stürzt\nsich mit seinem ganzen Körper auf einen.",
		'pt-br': "Ele tem a pele muito fina. Tome cuidado para\nnão zangá-lo ou ele pode inflar permanentemente\ne golpear com uma pancada de corpo.",
		ko: "얇고 고운 털을 지니고 있다.\n화나게 하면 몸을 점점 부풀리며\n덮쳐 오기 때문에 주의가 필요하다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Comforting Song",
			fr: "Chant Réconfortant",
			es: "Canción Reconfortante",
			it: "Canto Soave",
			de: "Wohltuendes Lied",
			'pt-br': "Canção Reconfortante",
			ko: "평온의 노래"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
			it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 배틀 포켓몬의 HP를 20회복."
		}
	}],

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			de: "Sanfter Hieb",
			'pt-br': "Tapinha",
			ko: "세게때리기"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card