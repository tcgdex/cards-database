import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'de-de': "Cerapendra",
		'pt-br': "Scolipede",
		'ko-kr': "펜드라"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",

	dexId: [545],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Whirlipede"
	},

	description: {
		'en-us': "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws' toxic spikes.",
		'fr-fr': "Après avoir saisi sa proie à l'aide des\ngriffes de son cou, il la plaque au sol puis la\ntransperce avec ses épines empoisonnées.",
		'es-es': "Usa las garras que le sobresalen del cuello para\natrapar a su presa, golpearla contra el suelo y\nrematarla inoculando un potente veneno.",
		'it-it': "Sbatte a terra la preda afferrandola con gli artigli\ndel collo per poi infilzarla con le punte velenose.",
		'de-de': "Kriegt es seine Beute mit den Krallen an seinem\nHals zu fassen, wirft es sie zu Boden und rammt\ndie giftigen Spitzen der Krallen in sie hinein.",
		'pt-br': "Scolipede fixa-se à sua presa com as garras em seu pescoço. Em seguida,\nlança-a ao chão e a espeta com os espinhos tóxicos de suas garras.",
		'ko-kr': "목의 가시로 먹이를 잡은 채\n그대로 땅으로 내동댕이쳐서\n독가시를 꽂는다."
	},

	stage: "Stage2",

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

		damage: "70+",
		cost: ["Darkness", "Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts de plus.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			
			'ko-kr': "상대의 배틀 포켓몬이 독이라면 50데미지를 추가한다.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
