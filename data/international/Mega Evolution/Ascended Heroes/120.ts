import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Coalossal",
		'fr-fr': "Monthracite",
		'es-es': "Coalossal",
		'es-mx': "Coalossal",
		'de-de': "Montecarbo",
		'it-it': "Coalossal",
		'pt-br': "Coalossal"
	},

	evolveFrom: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'es-mx': "Carkol",
		'de-de': "Wagong",
		'it-it': "Carkol",
		'pt-br': "Carkol",
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [839],
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Tar Cannon",
			'fr-fr': "Canon à Goudron",
			'es-es': "Cañón Alquitrán",
			'es-mx': "Cañón de Alquitrán",
			'de-de': "Teerkanone",
			'it-it': "Cannoncatrame",
			'pt-br': "Canhão de Piche"
		},

		effect: {
			'en-us': "This attack does 140 damage to 1 of your opponent's Pokémon. If you don't have 10 or more Basic {F} Energy cards in your discard pile, this attack does nothing. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 140 dégâts à l'un des Pokémon de votre adversaire. Si vous n'avez pas au moins 10 cartes Énergie {F} de base dans votre pile de défausse, cette attaque ne fait rien. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 140 puntos de daño a uno de los Pokémon de tu rival. Si no tienes 10 cartas de Energía {F} Básica o más en tu pila de descartes, este ataque no hace nada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 140 puntos de daño a 1 de los Pokémon de tu rival. Si no tienes 10 cartas de Energía {F} Básica o más en tu pila de descartes, este ataque no hace nada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 140 Schadenspunkte zu. Wenn du nicht 10 oder mehr Basis-{F}-Energiekarten in deinem Ablagestapel hast, hat diese Attacke keine Auswirkungen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 140 danni a uno dei Pokémon del tuo avversario. Se non hai 10 o più carte Energia base {F} nella tua pila degli scarti, questo attacco non ha effetto. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 140 pontos de dano a 1 dos Pokémon do seu oponente. Se você não tiver 10 ou mais cartas de Energia {F} Básica na sua pilha de descarte, este ataque não fará nada. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bulky Bump",
			'fr-fr': "Impact Lourd",
			'es-es': "Topetón Corpulento",
			'es-mx': "Trancazo Corpulento",
			'de-de': "Wuchtiger Stoß",
			'it-it': "Gran Colpo",
			'pt-br': "Colisão Robusta"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	description: {
		'en-us': "It’s gentle usually but fearsome when angered. With a body that burns at over 2,700 degrees Fahrenheit, it crushes foes and turns them to ash.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869731,
			tcgplayer: 675932
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870326,
			tcgplayer: 676947
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870325,
			tcgplayer: 677087
		}
	},
],
}

export default card
