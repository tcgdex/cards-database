import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		fr: "Tomberro-ex",
		en: "Houndstone ex",
		es: "Houndstone ex",
		it: "Houndstone-ex",
		pt: "Houndstone ex",
		de: "Friedwuff-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Grosse Morsure",
			en: "Big Bite",
			es: "Gran Mordisco",
			it: "Grande Morso",
			pt: "Mordidona",
			de: "Mächtiger Biss"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Hommage Posthume",
			en: "Last Respects",
			es: "Homenaje Póstumo",
			it: "Omaggio ai KO",
			pt: "Último Adeus",
			de: "Letzte Ehre"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon {P} dans votre pile de défausse.",
			en: "This attack does 10 more damage for each {P} Pokémon in your discard pile.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon {P} en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon {P} nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon {P} na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "160+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 725182
	}
}

export default card