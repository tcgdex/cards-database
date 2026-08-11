import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glastrier",
		'fr-fr': "Blizzeval",
		'es-es': "Glastrier",
		'es-mx': "Glastrier",
		'de-de': "Polaross",
		'it-it': "Glastrier",
		'pt-br': "Glastrier"
	},

	illustrator: "mashu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [896],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ice Shot",
			'fr-fr': "Coup Glacial",
			'es-es': "Disparo Gélido",
			'es-mx': "Disparo Gélido",
			'de-de': "Eisgeschoss",
			'it-it': "Colpoghiaccio",
			'pt-br': "Disparo de Gelo"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Frosty Typhoon",
			'fr-fr': "Typhon Givré",
			'es-es': "Tifón Gélido",
			'es-mx': "Tifón Glacial",
			'de-de': "Frosttaifun",
			'it-it': "Gelotifone",
			'pt-br': "Tufão Glacial"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Frosty Typhoon.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tifón Gélido.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Tifón Glacial.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Frosttaifun nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Glacial."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Glastrier emits intense cold from its hooves. It’s also a belligerent Pokémon—anything it wants, it takes by force.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869665,
			tcgplayer: 675866
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870224,
			tcgplayer: 676896
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870223,
			tcgplayer: 677036
		}
	},
],
}

export default card
