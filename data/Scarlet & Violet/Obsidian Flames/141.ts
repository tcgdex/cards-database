import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		fr: "Cizayox",
		en: "Scizor",
		es: "Scizor",
		it: "Scizor",
		pt: "Scizor",
		de: "Scherox"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Cisailles Punitives",
			en: "Punishing Scissors",
			es: "Tijeras Castigadoras",
			it: "Forbici Punitive",
			pt: "Tesouras da Punição",
			de: "Strafende Scheren"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			en: "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			es: "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			it: "Questo attacco infligge 50 danni in più per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tem uma Habilidade.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			fr: "Coupe",
			en: "Cut",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "otumami"
}

export default card
