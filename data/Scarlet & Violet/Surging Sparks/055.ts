import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Bundle",
		fr: "Hotte-de-Fer",
		es: "Ferrosaco",
		it: "Saccoferreo",
		pt: "Pacote Férreo",
		de: "Eisenbündel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Gusting Collision",
			fr: "Collision Rafale",
			es: "Colisión Racheada",
			it: "Schiantoraffica",
			pt: "Colisão de Vento",
			de: "Stürmische Kollision"
		},

		effect: {
			en: "This attack does 50 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte weniger zu."
		},

		damage: "200-"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
