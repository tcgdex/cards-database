import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		de: "Schlapor",
		'pt-br': "Lopunny",
		ko: "이어롭"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [428],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Buneary"
	},

	description: {
		en: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
		fr: "Constamment sur le qui-vive, il donne des coups de pied\nparticulièrement dévastateurs si une menace approche.",
		es: "Está siempre atento a lo que ocurre a su\nalrededor. Si advierte peligro, se defenderá\ncon patadas de potencia devastadora.",
		it: "Presta sempre attenzione all'ambiente\ncircostante e in caso di pericolo sfodera\ncalci di straordinaria potenza distruttiva.",
		de: "Schlapor behält seine Umgebung stets im Auge.\nWenn Gefahr im Verzug ist, setzt es sich mit\nvernichtenden Tritten zur Wehr.",
		'pt-br': "Lopunny está constantemente monitorando seus\narredores. Se o perigo se aproxima, este Pokémon\nresponde com chutes superdestrutivos.",
		ko: "주위 상황을 항상 신경 쓰고 있으며\n위험이 닥치면 무시무시한 파괴력을\n가진 킥을 날린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jump Kick",
			fr: "Pied Sauté",
			es: "Patada Salto",
			it: "Calciosalto",
			de: "Sprungkick",
			'pt-br': "Chute Pulo",
			ko: "점프킥"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
