import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot ex",
		fr: "Roucarnage-ex",
		es: "Pidgeot ex",
		it: "Pidgeot-ex",
		de: "Tauboss-ex",
		'pt-br': "Pidgeot ex",
		ko: "피죤투 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Scattering Cyclone",
			fr: "Cyclone Ravageur",
			es: "Ciclón Fragmentado",
			it: "Ciclone Travolgente",
			de: "Wütender Zyklon",
			'pt-br': "Ciclone Disperso",
			ko: "차흩뜨리기 사이클론"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬의 수 × 20데미지를 추가한다."
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
