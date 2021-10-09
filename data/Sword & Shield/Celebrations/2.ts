import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Reshiram",
		fr: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram",
		de: "Reshiram"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Aya Kusube",

	attacks: [{
		name: {
			en: "Scorching Wind",
			fr: "Vent Brûlant",
			es: "Viento Abrasador",
			it: "Vento Ustionante",
			pt: "Vento Escaldante",
			de: "Versengender Wind"
		},

		effect: {
			en: "This attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Black Flame",
			fr: "Flamme Noire",
			es: "Llama Negra",
			it: "Fiamma Nera",
			pt: "Chama Negra",
			de: "Schwarze Flamme"
		},

		effect: {
			en: "If Zekrom is on your Bench, this attack does 80 more damage.",
			fr: "Si Zekrom est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si Zekrom está en tu Banca, este ataque hace 80 puntos de daño más.",
			it: "Se Zekrom è nella tua panchina, questo attacco infligge 80 danni in più.",
			pt: "Se Zekrom estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn sich Zekrom auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card