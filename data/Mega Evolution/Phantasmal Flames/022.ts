import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		'es-mx': "Dewgong",
		de: "Jugong",
		it: "Dewgong",
		pt: "Dewgong"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat",
			fr: "Isograisse",
			es: "Sebo",
			'es-mx': "Sebo",
			de: "Speckschicht",
			it: "Grassospesso",
			pt: "Gordura Espessa"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks from your opponent's {R} or {W} Pokémon (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon {R} ou {W} de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon {R} o {W} de tu rival hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 30 puntos de daño menos de los ataques de los Pokémon {R} o {W} de tu rival (después de aplicar Debilidad y Resistencia).",
			de: "Diesem Pokémon werden durch Attacken von {R}- oder {W}-Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi dei Pokémon {R} o {W} del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques dos Pokémon {R} ou {W} do seu oponente (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Slam",
			fr: "Souplesse",
			es: "Atizar",
			'es-mx': "Golpazo",
			de: "Slam",
			it: "Schianto",
			pt: "Pancada Brusca"
		},

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara."
		},

		damage: "70×"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857597
	}
}

export default card