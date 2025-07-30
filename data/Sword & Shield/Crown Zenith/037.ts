import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre V",
		fr: "Kyogre V",
		es: "Kyogre V",
		it: "Kyogre V",
		pt: "Kyogre V",
		de: "Kyogre V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Dual Splash",
			fr: "Double Splash",
			es: "Doble Salpicadura",
			it: "Doppiosplash",
			pt: "Esguicho Duplo",
			de: "Doppelplatscher"
		},

		effect: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Aqua Typhoon",
			fr: "Typhon Aquatique",
			es: "Tifón Aqua",
			it: "Idrotifone",
			pt: "Tufão Aquático",
			de: "Aquataifun"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Aqua Typhoon.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Aquatique.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Tifón Aqua.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Idrotifone.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Aquático.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Aquataifun nicht einsetzen."
		},

		damage: 210
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691754
	}
}

export default card
