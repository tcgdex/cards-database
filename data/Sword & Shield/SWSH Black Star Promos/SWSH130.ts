import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [898],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Ice Rider Calyrex V",
		fr: "Sylveroy Cavalier du Froid V",
		de: "Schimmelreiter-Coronospa V",
		es: "Calyrex Jinete Glacial V",
		pt: "Calyrex Cavaleiro Glacial V",
		it: "Calyrex Cavaliere Glaciale V"
	},

	rarity: "None",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Blizzard",
			fr: "Blizzard",
			de: "Blizzard",
			es: "Ventisca",
			pt: "Nevasca",
			it: "Bora"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Frost Stamp",
			fr: "Piétinement Givré",
			de: "Froststoß",
			es: "Pisada Gélida",
			pt: "Selo Congelante",
			it: "Geloimpronta"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 572539
	}
}

export default card
