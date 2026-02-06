import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [896],

	name: {
		en: "Glastrier",
		fr: "Blizzeval",
		es: "Glastrier",
		'es-mx': "Glastrier",
		de: "Polaross",
		it: "Glastrier",
		pt: "Glastrier"
	},

	illustrator: "mashu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ice Shot",
			fr: "Coup Glacial",
			es: "Disparo Gélido",
			'es-mx': "Disparo Gélido",
			de: "Eisgeschoss",
			it: "Colpoghiaccio",
			pt: "Disparo de Gelo"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Frosty Typhoon",
			fr: "Typhon Givré",
			es: "Tifón Gélido",
			'es-mx': "Tifón Glacial",
			de: "Frosttaifun",
			it: "Gelotifone",
			pt: "Tufão Glacial"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Frosty Typhoon.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Tifón Gélido.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Tifón Glacial.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Frosttaifun nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Glacial."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675866,
		cardmarket: 869665
	}
}

export default card