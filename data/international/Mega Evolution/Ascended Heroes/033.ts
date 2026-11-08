import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Darmanitan",
		'fr-fr': "Darumacho de N",
		'es-es': "Darmanitan de N",
		'es-mx': "Darmanitan de N",
		'de-de': "Ns Flampivian",
		'it-it': "Darmanitan di N",
		'pt-br': "Darmanitan do N"
	},

	evolveFrom: {
		'en-us': "N's Darumaka",
		'fr-fr': "Darumarond de N",
		'es-es': "Darumaka de N",
		'es-mx': "Darumaka de N",
		'de-de': "Ns Flampion",
		'it-it': "Darumaka di N",
		'pt-br': "Darumaka do N",
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Back Draft",
			'fr-fr': "Contre-Explosion",
			'es-es': "Deflagración",
			'es-mx': "Deflagración",
			'de-de': "Backdraft",
			'it-it': "Vampata di Ritorno",
			'pt-br': "Ignição Explosiva"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Basic Energy card in your opponent's discard pile.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Énergie de base dans la pile de défausse de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta de Energía Básica en la pila de descartes de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada carta de Energía Básica en la pila de descartes de tu rival.",
			'de-de': "Diese Attacke fügt für jede Basis-Energiekarte im Ablagestapel deines Gegners 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Energia base nella pila degli scarti del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta de Energia Básica na pilha de descarte do seu oponente."
		},

		damage: "30×"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flamebody Cannon",
			'fr-fr': "Canon Corps Enflammé",
			'es-es': "Cañón Flamígero",
			'es-mx': "Cañón Llameante",
			'de-de': "Flammenkörperkanone",
			'it-it': "Cannone Corpofiamma",
			'pt-br': "Canhão de Corpo Flamejante"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon, and this attack also does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige aussi 90 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías de este Pokémon, y este ataque también hace 90 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque también hace 90 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tutte le Energie da questo Pokémon e questo attacco infligge anche 90 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon, e este ataque também causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon’s power level rises along with the temperature of its fire, which can reach 2,500 degrees Fahrenheit.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869644,
			tcgplayer: 675845
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870190,
			tcgplayer: 676879
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870189,
			tcgplayer: 677019
		}
	},
],
}

export default card
