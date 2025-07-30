import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Surfing Pikachu VMAX",
		fr: "Pikachu Surfeur VMAX",
		es: "Pikachu Surf VMAX",
		it: "Pikachu Surf VMAX",
		pt: "Pikachu Surfista VMAX",
		de: "Surfendes Pikachu VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			en: "Max Surfer",
			fr: "Surfeuromax",
			es: "Maxisurfista",
			it: "Dynasurfista",
			pt: "Surfista Max",
			de: "Dyna-Surfen"
		},

		effect: {
			en: "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 160,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		en: "Surfing Pikachu V",
		fr: "Pikachu Surfeur-V",
		es: "Pikachu Surf V",
		it: "Pikachu Surf-V",
		pt: "Pikachu Surfista V",
		de: "Surfendes Pikachu-V"
	},

	regulationMark: "E",
	dexId: [25],

	thirdParty: {
		cardmarket: 576754,
		tcgplayer: 250307
	}
}

export default card
