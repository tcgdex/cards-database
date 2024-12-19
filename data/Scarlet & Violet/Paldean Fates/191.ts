import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [212],
	set: Set,

	name: {
		en: "Scizor",
		fr: "Cizayox",
		es: "Scizor",
		it: "Scizor",
		pt: "Scizor",
		de: "Scherox"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Punishing Scissors",
			fr: "Cisailles Punitives",
			es: "Tijeras Castigadoras",
			it: "Forbici Punitive",
			pt: "Tesouras da Punição",
			de: "Strafende Scheren"
		},

		effect: {
			en: "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			es: "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			it: "Questo attacco infligge 50 danni in più per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tem uma Habilidade.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			en: "Cut",
			fr: "Coupe",
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
		normal: false,
		reverse: false
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	}
}

export default card