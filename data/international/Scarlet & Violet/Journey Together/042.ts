import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [378],
	set: Set,

	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'de-de': "Regice",
		'it-it': "Regice",
		'pt-br': "Regice",
		'es-mx': "Regice"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'es-es': "Témpano",
			'de-de': "Eiszapfen",
			'it-it': "Stalattite",
			'pt-br': "Pingente de Gelo",
			'es-mx': "Témpano de Hielo"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'de-de': "Blizzard",
			'it-it': "Bora",
			'pt-br': "Nevasca",
			'es-mx': "Ventisca"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "Takumi Wada",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817194,
				tcgplayer: 623469
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817194,
				tcgplayer: 623469
			}
		},
	],
}

export default card
