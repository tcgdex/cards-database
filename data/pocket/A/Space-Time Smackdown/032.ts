import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'de-de': "Keifel",
		'pt-br': "Piloswine",
		'ko-kr': "메꾸리"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [221],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Swinub"
	},

	description: {
		'en-us': "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
		'fr-fr': "S'il charge un ennemi, les poils de son dos\nse dressent. Il est très sensible au bruit.",
		'es-es': "Cuando carga contra un enemigo, se le erizan\nlos pelos del lomo. Es muy sensible al sonido.",
		'it-it': "Quando carica il nemico, i peli gli si\nrizzano sul dorso. È molto sensibile ai suoni.",
		'de-de': "Beim Angriff auf einen Gegner stellen sich seine\nRückenhaare auf. Es hört außergewöhnlich gut.",
		'pt-br': "Quando Piloswine dispara contra um oponente,\nos pelos nas suas costas se arrepiam.\nEste Pokémon é muito sensível ao som.",
		'ko-kr': "상대를 목표로 삼고 돌진할 때\n등에 있는 털이 곤두선다.\n소리에 매우 민감하다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thick Fat",
			'fr-fr': "Isograisse",
			'es-es': "Sebo",
			'it-it': "Grassospesso",
			'de-de': "Speckschicht",
			'pt-br': "Gordura Espessa",
			'ko-kr': "두꺼운지방"
		},

		effect: {
			'en-us': "This Pokémon takes −20 damage from attacks from {R} or {W} Pokémon.",
			'fr-fr': "Ce Pokémon subit − 20 dégâts provenant des attaques des Pokémon {R} ou {W}.",
			'es-es': "Los ataques de los Pokémon {R} o {W} hacen -20 puntos de daño a este Pokémon.",
			'it-it': "Questo Pokémon subisce -20 danni dagli attacchi dei Pokémon {R} o {W}.",
			'de-de': "Diesem Pokémon werden durch Attacken von {R}- oder {W}-Pokémon − 20 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −20 pontos de dano de ataques de Pokémon {R} ou {W}.",
			'ko-kr': "이 포켓몬이 {R} 또는 {W}포켓몬으로부터 받는 기술의 데미지를 {R}-20[/Ctrl:NoBreak]한다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'de-de': "Einhämmern",
			'pt-br': "Martelada",
			'ko-kr': "한방 먹이기"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["dialga"]
}

export default card
