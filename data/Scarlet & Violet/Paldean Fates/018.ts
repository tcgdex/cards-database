import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Growl",
			fr: "Rugissement",
			es: "Gruñido",
			it: "Ruggito",
			pt: "Rosnadura"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Pika Bolt",
			fr: "Pik'Éclair",
			es: "Rayo Pika",
			it: "Pikafulmine",
			pt: "Relâmpagochu"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card