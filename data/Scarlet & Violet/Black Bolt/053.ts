import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		de: "Demeteros",
		it: "Landorus",
		pt: "Landorus",
		es: "Landorus",
		'es-mx': "Landorus"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Abundant Harvest",
			fr: "Récolte Abondante",
			de: "Hülle und Fülle",
			it: "Granraccolto",
			pt: "Colheita Abundante",
			es: "Cosecha Abundante",
			'es-mx': "Cosecha Abundante"
		},

		effect: {
			en: "Attach a Basic {F} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			de: "Lege 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			it: "Assegna a questo Pokémon una carta Energia base {F} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {F} Básica da sua pilha de descarte a este Pokémon.",
			es: "Une 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			de: "Erdbeben",
			it: "Terremoto",
			pt: "Terremoto",
			es: "Terremoto",
			'es-mx': "Terremoto"
		},

		effect: {
			en: "This attack also does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836015
	}
}

export default card