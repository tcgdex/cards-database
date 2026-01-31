import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite",
		es: "Coalossal",
		'es-mx': "Coalossal",
		de: "Montecarbo",
		it: "Coalossal",
		pt: "Coalossal"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	dexId: [839],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tar Cannon",
			fr: "Canon à Goudron",
			es: "Cañón Alquitrán",
			'es-mx': "Cañón de Alquitrán",
			de: "Teerkanone",
			it: "Cannoncatrame",
			pt: "Canhão de Piche"
		},

		effect: {
			en: "This attack does 140 damage to 1 of your opponent's Pokémon. If you don't have 10 or more Basic {F} Energy cards in your discard pile, this attack does nothing. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 140 dégâts à l'un des Pokémon de votre adversaire. Si vous n'avez pas au moins 10 cartes Énergie {F} de base dans votre pile de défausse, cette attaque ne fait rien. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 140 puntos de daño a uno de los Pokémon de tu rival. Si no tienes 10 cartas de Energía {F} Básica o más en tu pila de descartes, este ataque no hace nada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 140 puntos de daño a 1 de los Pokémon de tu rival. Si no tienes 10 cartas de Energía {F} Básica o más en tu pila de descartes, este ataque no hace nada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 140 Schadenspunkte zu. Wenn du nicht 10 oder mehr Basis-{F}-Energiekarten in deinem Ablagestapel hast, hat diese Attacke keine Auswirkungen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 140 danni a uno dei Pokémon del tuo avversario. Se non hai 10 o più carte Energia base {F} nella tua pila degli scarti, questo attacco non ha effetto. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 140 pontos de dano a 1 dos Pokémon do seu oponente. Se você não tiver 10 ou mais cartas de Energia {F} Básica na sua pilha de descarte, este ataque não fará nada. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bulky Bump",
			fr: "Impact Lourd",
			es: "Topetón Corpulento",
			'es-mx': "Trancazo Corpulento",
			de: "Wuchtiger Stoß",
			it: "Gran Colpo",
			pt: "Colisão Robusta"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon."
		},

		damage: 220
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675932,
		cardmarket: 869731
	}
}

export default card