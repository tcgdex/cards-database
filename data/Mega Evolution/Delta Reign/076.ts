import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	cameoDexIds: [82],

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		de: "Mopex",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		'es-mx': "Cyclizar"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			'es-mx': "Mordida"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Break Through",
			fr: "Percée",
			de: "Eine Bresche schlagen",
			es: "Abrir Paso",
			it: "Irruzione",
			pt: "Atravessar",
			'es-mx': "Abrir Paso"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. <em>(Não aplique Fraqueza e Resistência aos Pokémon no Banco.)</em>",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 110,
		cost: ["Grass", "Darkness", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 728044,
		cardmarket: 918904
	}
}

export default card