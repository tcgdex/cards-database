import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'de-de': "Zebritz",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'es-es': "Zebstrika",
		'es-mx': "Zebstrika"
	},

	illustrator: "REND",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'de-de': "Elezeba",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'es-es': "Blitzle",
		'es-mx': "Blitzle"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'de-de': "Schmetterkick",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'es-es': "Patada Destrucción",
			'es-mx': "Patada Devastadora"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electrobullet",
			'fr-fr': "Électrojectile",
			'de-de': "Elektrokugel",
			'it-it': "Elettrodardo",
			'pt-br': "Bala Elétrica",
			'es-es': "Electrobala",
			'es-mx': "Electrobala"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836124,
			tcgplayer: 642227
		}
	},
],
}

export default card
