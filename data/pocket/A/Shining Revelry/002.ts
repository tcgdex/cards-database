import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'de-de': "Kokuna",
		'pt-br': "Kakuna",
		'ko-kr': "딱충이"
	},

	illustrator: "Yuka Morii",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [14],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Weedle"
	},

	description: {
		'en-us': "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
		'fr-fr': "Incapable de se déplacer de lui-même,\nil se défend en durcissant sa carapace.",
		'es-es': "Casi incapaz de moverse, este Pokémon solo\npuede endurecer su caparazón para protegerse.",
		'it-it': "Quasi incapace di muoversi, questo Pokémon può\nsolo indurire il proprio guscio per proteggersi.",
		'de-de': "Dieses Pokémon kann sich kaum bewegen.\nBei drohender Gefahr verhärtet es seinen Panzer.",
		'pt-br': "Quase incapaz de se mover, esse Pokémon\npode apenas endurecer sua carapaça para\nse proteger quando está em perigo.",
		'ko-kr': "스스로는 거의 움직일 수 없지만\n위험할 때는 단단해져서\n몸을 보호하고 있는 것 같다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "String Shot",
			'fr-fr': "Sécrétion",
			'es-es': "Disparo Demora",
			'it-it': "Millebave",
			'de-de': "Fadenschuss",
			'pt-br': "Estilingada",
			'ko-kr': "실뿜기"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card