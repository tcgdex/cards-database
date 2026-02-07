import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [815],

	name: {
		en: "Cinderace ex",
		fr: "Pyrobut-ex",
		es: "Cinderace ex",
		'es-mx': "Cinderace ex",
		de: "Liberlo-ex",
		it: "Cinderace-ex",
		pt: "Cinderace ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
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
			'es-mx': "Impacto Ígneo",
			de: "Feuergeschoss",
			it: "Colpo Fiammante",
			pt: "Golpe de Chamas"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flare Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas."
		},

		damage: 280
	}, {
		cost: ["Fire", "Fighting", "Darkness"],

		name: {
			en: "Garnet Volley",
			fr: "Volée de Grenats",
			es: "Volea Granate",
			'es-mx': "Volea Granate",
			de: "Granat-Volley",
			it: "Cannonata di Granato",
			pt: "Voleio de Granate"
		},

		effect: {
			en: "This attack does 180 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 180 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 180 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 180 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 180 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 180 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 0,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675850,
		cardmarket: 869649
	}
}

export default card