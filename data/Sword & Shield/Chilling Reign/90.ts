import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sandaconda VMAX",
		fr: "Dunaconda VMAX",
		es: "Sandaconda VMAX",
		it: "Sandaconda VMAX",
		pt: "Sandaconda VMAX",
		de: "Sanaconda VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandaconda V",
		fr: "Dunaconda-V"
	},

	attacks: [{
		name: {
			en: "Sand Pulse",
			fr: "Vibra Sable",
			es: "Pulso de Arena",
			it: "Silicopulsar",
			pt: "Pulso de Areia",
			de: "Sandimpuls"
		},

		effect: {
			en: "This attack also does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "G-Max Cyclone",
			fr: "Tourbillon G-Max",
			es: "Gigaciclón",
			it: "Gigatornado",
			pt: "Ciclone G-Max",
			de: "Giga-Wirbel"
		},

		effect: {
			en: "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, comme il vous plaît.",
			es: "Mueve cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
			it: "Sposta un numero qualsiasi di Energie dall’uno all’altro dei tuoi Pokémon nel modo che preferisci.",
			pt: "Mova qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
			de: "Verschiebe beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card