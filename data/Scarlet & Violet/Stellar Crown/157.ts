import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace ex",
		fr: "Pyrobut-ex",
		es: "Cinderace ex",
		it: "Cinderace-ex",
		pt: "Cinderace ex",
		de: "Liberlo-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flare Strike",
			fr: "Attaque Flamboyante",
			es: "Impacto Ígneo",
			it: "Colpo Fiammante",
			pt: "Golpe de Chamas",
			de: "Feuergeschoss"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flare Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen."
		},

		damage: 280
	}, {
		cost: ["Fire", "Fighting", "Darkness"],

		name: {
			en: "Garnet Volley",
			fr: "Volée de Grenats",
			es: "Volea Granate",
			it: "Cannonata di Granato",
			pt: "Voleio de Granate",
			de: "Granat-Volley"
		},

		effect: {
			en: "This attack does 180 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 180 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 180 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 180 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 180 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 785881
	}
}

export default card
