import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgeot ex",
		'fr-fr': "Roucarnage-ex",
		'es-es': "Pidgeot ex",
		'it-it': "Pidgeot-ex",
		'de-de': "Tauboss-ex",
		'pt-br': "Pidgeot ex",
		'ko-kr': "피죤투 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [18],
	hp: 170,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Pidgeotto"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Scattering Cyclone",
			'fr-fr': "Cyclone Ravageur",
			'es-es': "Ciclón Fragmentado",
			'it-it': "Ciclone Travolgente",
			'de-de': "Wütender Zyklon",
			'pt-br': "Ciclone Disperso",
			'ko-kr': "차흩뜨리기 사이클론"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬의 수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card
