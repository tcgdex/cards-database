import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		es: "Armarouge",
		it: "Armarouge",
		pt: "Armarouge",
		de: "Crimanzo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Crimson Blaster",
			fr: "Explosion Carmin",
			es: "Explosión Carmesí",
			it: "Esplosione Vermiglia",
			pt: "Detonador Carmim",
			de: "Feuerroter Blaster"
		},

		effect: {
			en: "Discard all Fire Energy from this Pokémon, and this attack does 180 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies Fire de ce Pokémon. Cette attaque inflige 180 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías Fire de este Pokémon, y este ataque hace 180 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta tutte le Energie Fire da questo Pokémon e questo attacco infligge 180 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias Fire deste Pokémon, e este ataque causa 180 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Charcadet"
	}
}

export default card
