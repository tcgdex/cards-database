import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		fr: "Givrali",
		de: "Glaziola",
		es: "Glaceon",
		pt: "Glaceon",
		it: "Glaceon",
		en: "Glaceon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee",
		en: "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Grêle",
			de: "Hagelsturm",
			es: "Granizo",
			pt: "Granizo",
			it: "Grandine",
			en: "Hail"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Typhon Givré",
			de: "Frosttaifun",
			es: "Tifón Gélido",
			pt: "Tufão Glacial",
			it: "Gelotifone",
			en: "Frosty Typhoon"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Frosttaifun nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Tifón Gélido.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Glacial.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
			en: "During your next turn, this Pokémon can't use Frosty Typhoon."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "The coldness emanating from Glaceon causes powdery snow to form, making it quite a popular Pokémon at ski resorts."
	}
}

export default card