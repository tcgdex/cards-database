import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'de-de': "Demeteros",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'es-es': "Landorus",
		'es-mx': "Landorus"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Abundant Harvest",
			'fr-fr': "Récolte Abondante",
			'de-de': "Hülle und Fülle",
			'it-it': "Granraccolto",
			'pt-br': "Colheita Abundante",
			'es-es': "Cosecha Abundante",
			'es-mx': "Cosecha Abundante"
		},

		effect: {
			'en-us': "Attach a Basic {F} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			'it-it': "Assegna a questo Pokémon una carta Energia base {F} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {F} Básica da sua pilha de descarte a este Pokémon.",
			'es-es': "Une 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Une 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'de-de': "Erdbeben",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'es-es': "Terremoto",
			'es-mx': "Terremoto"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836177,
				tcgplayer: 642586
			}
		},
	]
}

export default card
