import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		de: "Aranestro",
		'pt-br': "Araquanid",
		ko: "깨비물거미"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Dewpider"
	},

	description: {
		en: "It launches water bubbles with its legs, drowning prey within the bubbles. This Pokémon can then take its time to savor its meal.",
		fr: "Il piège ses proies dans des bulles qu'il lance\navec ses pattes. Une fois qu'elles se sont noyées,\nil prend son temps pour les déguster.",
		es: "Usa las patas para lanzar burbujas de agua con las que atrapa y\nahoga a sus presas. Luego se toma su tiempo para saborearlas.",
		it: "Con le zampe lancia bolle d'acqua contro la preda per farla\nannegare. Dopo averla catturata, se la gusta senza fretta.",
		de: "Mit seinen Beinen verschießt es Wasserblasen,\num Beute darin einzuschließen und zu ertränken.\nDann verspeist es sie in aller Ruhe.",
		'pt-br': "Lança bolhas de água com suas pernas, afogando suas\npresas dentro delas. Depois, este Pokémon consegue tirar\num tempo para saborear sua refeição.",
		ko: "다리로 수포를 날려서\n먹이를 감싼 다음 익사시킨다.\n그리고는 시간을 들여 천천히 음미한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dangerous Claws",
			fr: "Griffes Redoutables",
			es: "Zarpas Peligrosas",
			it: "Artigli Pericolosi",
			de: "Bedrohliche Klauen",
			'pt-br': "Garras Temerárias",
			ko: "데인저러스 크루"
		},

		damage: "60+",
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Basic, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Basic, este ataque hace 60 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Basic, questo attacco infligge 60 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Basic Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Basic, este ataque causará 60 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 Basic포켓몬이라면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
