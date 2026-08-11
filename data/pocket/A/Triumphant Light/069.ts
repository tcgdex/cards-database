import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'de-de': "Shaymin",
		'pt-br': "Shaymin",
		'ko-kr': "쉐이미"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [492],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
		'fr-fr': "Il peut dissoudre les toxines dans l'air pour transformer\nun désert en un champ de fleurs luxuriantes.",
		'es-es': "Puede disolver las toxinas del aire para\ntransformar tierra yerma en campos de flores.",
		'it-it': "Può dissolvere le tossine nell'aria per mutare\nall'istante una terra arida in un rigoglioso campo fiorito.",
		'de-de': "Es kann die Luft von Giften reinigen und Ödland\nin ein üppig blühendes Blumenfeld verwandeln.",
		'pt-br': "Pode dissolver toxinas no ar para instantaneamente\ntransformar terras arruinadas em campos\nde flores deslumbrantes.",
		'ko-kr': "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sky Support",
			'fr-fr': "Soutien Céleste",
			'es-es': "Apoyo Aéreo",
			'it-it': "Supporto Celeste",
			'de-de': "Himmelshilfe",
			'pt-br': "Suporte Celeste",
			'ko-kr': "스카이 서포트"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, your Active Basic Pokémon's Retreat Cost is 1 less.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon de base Actif est diminué de 1.",
			'es-es': "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Básico Activo es de 1 menos.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon Base attivo è ridotto di 1.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Basis-Pokémon um 1.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Básico Ativo será 1 a menos.",
			'ko-kr': "이 포켓몬이 벤치에 있는 한, 자신의 배틀필드의 Basic Pokémon기본 포켓몬의 후퇴에 필요한 에너지를 1개 적게 만든다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'de-de': "Flattern",
			'pt-br': "Asa",
			'ko-kr': "홰치기"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
