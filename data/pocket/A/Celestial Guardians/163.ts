import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pyukumuku",
		'fr-fr': "Concombaffe",
		'es-es': "Pyukumuku",
		'it-it': "Pyukumuku",
		'de-de': "Gufa",
		'pt-br': "Pyukumuku",
		'ko-kr': "해무기"
	},

	illustrator: "Toshinao Aoki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [771],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
		'fr-fr': "Il vit dans les eaux chaudes des hauts-fonds.\nS'il croise un ennemi, il l'attaque en lui crachant\nses organes internes au visage.",
		'es-es': "Vive en los cálidos bajíos de las playas. Si se\ntopa con un enemigo, ataca golpeándolo sin\ncesar con las entrañas que expulsa por la boca.",
		'it-it': "Vive vicino alle spiagge in acque calde e poco\nprofonde. Quando si imbatte in un nemico, lo\nattacca espellendo gli organi interni dalla bocca.",
		'de-de': "Es lebt in warmen Küstengewässern. Trifft es auf\neinen Gegner, öffnet es den Mund und lässt zum\nAngriff seine Organe hervorschnellen.",
		'pt-br': "Vive em águas rasas e quentes. Se encontra\num inimigo, cospe seus órgãos internos\npara enchê-lo de socos.",
		'ko-kr': "따뜻하고 얕은 여울에 산다.\n상대와 마주치면 체내 기관을\n입으로 뿜어서 때려눕힌다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Innards Out",
			'fr-fr': "Expuls'Organes",
			'es-es': "Revés",
			'it-it': "Espellinterno",
			'de-de': "Magenkrempler",
			'pt-br': "Extensão de Vísceras",
			'ko-kr': "내용물분출"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 50 damage to the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 50 dégâts.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 50 puntos de daño.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 50 danni.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, füge dem Angreifenden Pokémon 50 Schadenspunkte zu.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, cause 50 pontos de dano ao Pokémon Atacante.",
			'ko-kr': "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 기술을 사용한 포켓몬에게 50데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante",
			'es-es': "Esparcir Agua",
			'it-it': "Goccioline",
			'de-de': "Wassersprüher",
			'pt-br': "Aspergir Água",
			'ko-kr': "물뿌려대기"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card