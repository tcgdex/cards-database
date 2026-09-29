import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
	},

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		de: "Tentantel",
		es: "Ferrothorn",
		it: "Ferrothorn",
		'es-mx': "Ferrothorn",
		pt: "Ferrothorn"
	},

	illustrator: "Po-Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [598],
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			de: "Stachelstich",
			es: "Picotazo Púas",
			it: "Aculeopuntura",
			'es-mx': "Piquete de Púas",
			pt: "Ferroada de Espinhos"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Kaboom Needles",
			fr: "Épines Boum",
			de: "Krawumm-Dornen",
			es: "Bum Espinoso",
			it: "Bombaculei",
			'es-mx': "Espinas Detonantes",
			pt: "Espetos Explosivos"
		},

		effect: {
			en: "This attack does 50 damage to each of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.) </em>This Pokémon also does 130 damage to itself.",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em> Ce Pokémon s'inflige aussi 130 dégâts.",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em> Dieses Pokémon fügt auch sich selbst 130 Schadenspunkte zu.",
			es: "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em> Este Pokémon también se hace 130 puntos de daño a sí mismo.",
			it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>. Questo Pokémon infligge anche 130 danni a se stesso.",
			'es-mx': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em> Este Pokémon también se hace 130 puntos de daño a sí mismo.",
			pt: "Este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.) Este Pokémon também causa 130 pontos de dano a si mesmo."
		},

		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907711,
				tcgplayer: 716497
			}
		}
	],
}

export default card
