import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		es: "Hitmonlee",
		it: "Hitmonlee",
		de: "Kicklee",
		'pt-br': "Hitmonlee",
		ko: "시라소몬"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",

	dexId: [106],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stretch Kick",
			fr: "Allonge",
			es: "Patada Amplia",
			it: "Calciallungo",
			de: "Streckkick",
			'pt-br': "Chute Esticado",
			ko: "늘어나는킥"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
		fr: "Il possède un fantastique sens de l'équilibre, et peut donner\ndes rafales de coups de pied dans toutes les positions.",
		es: "Este Pokémon tiene un sentido del equilibrio\nincreíble. Puede dar patadas desde cualquier posición.",
		it: "Questo straordinario Pokémon ha\nun grande equilibrio. Può tirare\nraffiche di calci da qualsiasi posizione.",
		de: "Dieses Pokémon besitzt einen formidablen\nGleichgewichtssinn. Es kann in jeder Position\npausenlos zutreten.",
		'pt-br': "Este incrível Pokémon possui um ótimo equilíbrio.\nConsegue chutar repetidamente de qualquer posição.",
		ko: "훌륭한 밸런스 감각으로\n어떤 자세라도 연속\n킥을 날리는 대단한 녀석이다."
	},

	boosters: ["mewtwo"]
}

export default card
