import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'fr-fr': "Givrali",
		'de-de': "Glaziola",
		'es-es': "Glaceon",
		'pt-br': "Glaceon",
		'it-it': "Glaceon",
		'en-us': "Glaceon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Grêle",
			'de-de': "Hagelsturm",
			'es-es': "Granizo",
			'pt-br': "Granizo",
			'it-it': "Grandine",
			'en-us': "Hail"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Typhon Givré",
			'de-de': "Frosttaifun",
			'es-es': "Tifón Gélido",
			'pt-br': "Tufão Glacial",
			'it-it': "Gelotifone",
			'en-us': "Frosty Typhoon"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Frosttaifun nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tifón Gélido.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Glacial.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
			'en-us': "During your next turn, this Pokémon can't use Frosty Typhoon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "The coldness emanating from Glaceon causes powdery snow to form, making it quite a popular Pokémon at ski resorts."
	},

	thirdParty: {
		cardmarket: 604998
	}
}

export default card
