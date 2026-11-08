import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'de-de': "Kramshef",
		'pt-br': "Honchkrow",
		'ko-kr': "돈크로우"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [430],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Murkrow"
	},

	description: {
		'en-us': "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.",
		'fr-fr': "Ce Pokémon impitoyable ne tolère aucun\néchec de la part de ses sbires, les Cornèbre.",
		'es-es': "No perdona ni se apiada nunca. No consiente\nfallos ni a los propios Murkrow que lo siguen.",
		'it-it': "Ha un carattere spietato. Pare che non perdoni il\nminimo errore commesso dai Murkrow suoi seguaci.",
		'de-de': "Kramshef kennt kein Erbarmen. Man sagt,\neinem untergebenen Kramurx verzeihe es\nniemals einen Fehler.",
		'pt-br': "Sua natureza é impiedosa. Diz-se que ele nunca perdoa\nos erros de seus seguidores Murkrow.",
		'ko-kr': "인정사정 없는 성격.\n부하인 니로우의 실패는\n절대 용서하지 않는다고 전해진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Skill Dive",
			'fr-fr': "Plongeon Contrôlé",
			'es-es': "Técnica de Buceo",
			'it-it': "Agiltuffo",
			'de-de': "Geübter Sturzflug",
			'pt-br': "Mergulho Habilidoso",
			'ko-kr': "직격비행"
		},

		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon\ndel tuo avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 1마리에게 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
