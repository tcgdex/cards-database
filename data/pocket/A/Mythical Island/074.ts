import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marshadow",
		'fr-fr': "Marshadow",
		'es-es': "Marshadow",
		'it-it': "Marshadow",
		'de-de': "Marshadow",
		'pt-br': "Marshadow",
		'ko-kr': "마샤도"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",

	dexId: [802],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it's imitating.",
		'fr-fr': "Il se fond dans l'ombre de son adversaire pour imiter sa\nforce et ses attaques. La copie surpasse alors l'original.",
		'es-es': "Se oculta en la sombra de su oponente y copia\nsus movimientos y su fuerza. Su imitación\nresulta más poderosa que el original.",
		'it-it': "Si infiltra nell'ombra del nemico, copiandone i movimenti e\nla forza. L'imitazione finisce per diventare più forte dell'originale.",
		'de-de': "Schlüpft es in den Schatten seines Gegners, um\ndessen Bewegungen und Kräfte zu imitieren,\nkann es sogar stärker als das Original werden.",
		'pt-br': "Invade as sombras dos outros e imita os seus poderes e movimentos.\nÀ medida que se aprimora, torna-se mais forte do que aqueles que está imitando.",
		'ko-kr': "상대 그림자에 숨어들어\n움직임이나 능력을 흉내 낸다.\n그러다가 진짜보다 강해진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Revenge",
			'fr-fr': "Vendetta",
			'es-es': "Desquite",
			'it-it': "Vendetta",
			'de-de': "Vergeltung",
			'pt-br': "Vingança",
			'ko-kr': "리벤지"
		},

		damage: "40+",
		cost: ["Fighting", "Colorless"],

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "상대의 이전 차례에 기술의 데미지로 자신의 포켓몬이 기절했다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card
