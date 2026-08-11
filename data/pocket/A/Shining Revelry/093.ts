import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Clodsire ex",
		'fr-fr': "Terraistede Paldea-ex",
		'es-es': "Clodsirede Paldea ex",
		'it-it': "Clodsiredi Paldea-ex",
		'de-de': "Paldea-Suelord-ex",
		'pt-br': "Clodsirede Paldea ex",
		'ko-kr': "팔데아토오 ex"
	},

	illustrator: "REND",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [980],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Paldean Wooper"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'de-de': "Giftschock",
			'pt-br': "Venochoque",
			'ko-kr': "베놈쇼크"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts de plus.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			
			'ko-kr': "상대의 배틀 포켓몬이 독이라면 60데미지를 추가한다.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card