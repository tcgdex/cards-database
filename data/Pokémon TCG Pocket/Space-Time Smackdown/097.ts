import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		de: "Kramshef",
		'pt-br': "Honchkrow",
		ko: "돈크로우"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow"
	},

	description: {
		en: "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.",
		fr: "Ce Pokémon impitoyable ne tolère aucun\néchec de la part de ses sbires, les Cornèbre.",
		es: "No perdona ni se apiada nunca. No consiente\nfallos ni a los propios Murkrow que lo siguen.",
		it: "Ha un carattere spietato. Pare che non perdoni il\nminimo errore commesso dai Murkrow suoi seguaci.",
		de: "Kramshef kennt kein Erbarmen. Man sagt,\neinem untergebenen Kramurx verzeihe es\nniemals einen Fehler.",
		'pt-br': "Sua natureza é impiedosa. Diz-se que ele nunca perdoa\nos erros de seus seguidores Murkrow.",
		ko: "인정사정 없는 성격.\n부하인 니로우의 실패는\n절대 용서하지 않는다고 전해진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
			es: "Técnica de Buceo",
			it: "Agiltuffo",
			de: "Geübter Sturzflug",
			'pt-br': "Mergulho Habilidoso",
			ko: "직격비행"
		},

		cost: ["Darkness", "Darkness"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 50데미지를 준다."
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
