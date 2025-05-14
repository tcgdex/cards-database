import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Scolipede",
		fr: "Brutapode",
		es: "Scolipede",
		it: "Scolipede",
		de: "Cerapendra",
		'pt-br': "Scolipede",
		ko: "펜드라"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Whirlipede"
	},

	description: {
		en: "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws' toxic spikes.",
		fr: "Après avoir saisi sa proie à l'aide des\ngriffes de son cou, il la plaque au sol puis la\ntransperce avec ses épines empoisonnées.",
		es: "Usa las garras que le sobresalen del cuello para\natrapar a su presa, golpearla contra el suelo y\nrematarla inoculando un potente veneno.",
		it: "Sbatte a terra la preda afferrandola con gli artigli\ndel collo per poi infilzarla con le punte velenose.",
		de: "Kriegt es seine Beute mit den Krallen an seinem\nHals zu fassen, wirft es sie zu Boden und rammt\ndie giftigen Spitzen der Krallen in sie hinein.",
		'pt-br': "Scolipede fixa-se à sua presa com as garras em seu pescoço. Em seguida,\nlança-a ao chão e a espeta com os espinhos tóxicos de suas garras.",
		ko: "목의 가시로 먹이를 잡은 채\n그대로 땅으로 내동댕이쳐서\n독가시를 꽂는다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			de: "Giftschock",
			'pt-br': "Venochoque",
			ko: "베놈쇼크"
		},

		damage: "70+",
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Poisoned, cette attaque inflige 50 dégâts de plus.",
			es: "Si el Pokémon Activo de tu rival está Poisoned, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è Poisoned, questo attacco infligge 50 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"{} ist\" v1=\"{}\" ], fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Poisoned, este ataque causará 50 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 Poisoned[Gr:Patchim v=\"이/가\" ]라면 50데미지를 추가한다."
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
