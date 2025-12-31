import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [523],
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		de: "Zebritz",
		it: "Zebstrika",
		pt: "Zebstrika",
		es: "Zebstrika",
		'es-mx': "Zebstrika"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba",
		it: "Blitzle",
		pt: "Blitzle",
		es: "Blitzle",
		'es-mx': "Blitzle"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			es: "Patada Destrucción",
			'es-mx': "Patada Devastadora"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electrobullet",
			fr: "Électrojectile",
			de: "Elektrokugel",
			it: "Elettrodardo",
			pt: "Bala Elétrica",
			es: "Electrobala",
			'es-mx': "Electrobala"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836124
	}
}

export default card