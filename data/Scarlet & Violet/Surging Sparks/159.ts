import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar ex",
		fr: "Motorizard-ex",
		es: "Cyclizar ex",
		it: "Cyclizar-ex",
		pt: "Cyclizar ex",
		de: "Mopex-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Break Through",
			fr: "Percée",
			es: "Abrir Paso",
			it: "Irruzione",
			pt: "Atravessar",
			de: "Eine Bresche schlagen"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}, {
		cost: ["Grass", "Fire", "Psychic"],

		name: {
			en: "Zircon Road",
			fr: "Route Zircon",
			es: "Camino de Zircones",
			it: "Strada di Zircone",
			pt: "Via de Zircão",
			de: "Zirkon-Strecke"
		},

		effect: {
			en: "You may draw 5 cards.",
			fr: "Vous pouvez piocher 5 cartes.",
			es: "Puedes robar 5 cartas.",
			it: "Puoi pescare cinque carte.",
			pt: "Você pode comprar 5 cartas.",
			de: "Du kannst 5 Karten ziehen."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 794532
	}
}

export default card
