import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia ex",
		fr: "Palkia-ex",
		es: "Palkia ex",
		it: "Palkia-ex",
		de: "Palkia-ex",
		'pt-br': "Palkia ex",
		ko: "펄기아 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			en: "Dimensional Storm",
			fr: "Tempête Dimensionnelle",
			es: "Tormenta Dimensional",
			it: "Tempesta Dimensionale",
			de: "Dimensionssturm",
			'pt-br': "Tempestade Dimensional",
			ko: "디멘션스톰"
		},

		damage: 150,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard 3 {W} Energy from this Pokémon. This attack also does 20 damage to each of your opponent's Benched Pokémon.",
			fr: "Défaussez 3 Énergies {W} de ce Pokémon. Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire.",
			es: "Descarta 3 Energías {W} de este Pokémon. Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Rimuovi 3 Energie {W} da questo Pokémon. Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Lege 3 {W}-Energien von diesem Pokémon ab. Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Descarte 3 Energias {W} deste Pokémon. Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
			ko: "이 포켓몬에서 {W}에너지를 3개 트래쉬하고 상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
