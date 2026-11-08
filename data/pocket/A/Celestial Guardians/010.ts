import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'de-de': "Bauz",
		'pt-br': "Rowlet",
		'ko-kr': "나몰빼미"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [722],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable.",
		'fr-fr': "Il attaque en tirant des plumes acérées. La force\nde ses coups de patte est également redoutable.",
		'es-es': "Usa sus afiladas plumas como arma arrojadiza y la\nfuerza de sus patas le permite asestar poderosas\npatadas que es mejor no subestimar.",
		'it-it': "Attacca lanciando piume affilate come lame e può\nanche tirare poderosi calci con le zampe robuste.",
		'de-de': "Es schleudert messerscharfe Federn auf seine Gegner.\nAber auch seine Tritte sind nicht zu unterschätzen,\ndenn es hat sehr kräftige Beine.",
		'pt-br': "Quando atacam, lançam suas penas, que são tão cortantes\nquanto lâminas. Suas pernas são robustas, por isso,\nseus chutes também são formidáveis.",
		'ko-kr': "칼같이 날카로운 날개를 날려\n공격한다. 발의 힘도 강해\n킥도 무시할 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Skill Dive",
			'fr-fr': "Plongeon Contrôlé",
			'es-es': "Técnica de Buceo",
			'it-it': "Agiltuffo",
			'de-de': "Geübter Sturzflug",
			'pt-br': "Mergulho Habilidoso",
			'ko-kr': "직격비행"
		},

		cost: ["Grass"],

		effect: {
			'en-us': "This attack does 10 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon\ndel tuo avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 1마리에게 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card