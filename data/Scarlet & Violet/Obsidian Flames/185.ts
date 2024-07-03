import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Flamenroule",
		en: "Flamigo",
		es: "Flamigo",
		it: "Flamigo",
		pt: "Flamigo",
		de: "Flaminkno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Picpic",
			en: "Peck",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Plumes Synchronisées",
			en: "Synchronized Feathers",
			es: "Plumas Sincronizadas",
			it: "Piume Sincronizzate",
			pt: "Penas Sincronizadas",
			de: "Synchronfedern"
		},

		effect: {
			fr: "Si Flamenroule est sur votre Banc, cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "If Flamigo is on your Bench, this attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Si Flamigo está en tu Banca, este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se Flamigo è nella tua panchina, questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Se Flamigo estiver no seu Banco, este ataque também causará 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Wenn sich Flaminkno auf deiner Bank befindet, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card