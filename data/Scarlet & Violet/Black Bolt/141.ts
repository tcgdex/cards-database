import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		de: "Klikdiklak",
		it: "Klinklang",
		pt: "Klinklang",
		es: "Klinklang",
		'es-mx': "Klinklang"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		en: "Klang",
		fr: "Clic",
		de: "Kliklak",
		it: "Klang",
		pt: "Klang",
		es: "Klang",
		"es-mx": "Klang"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gear Coating",
			fr: "Revêtement Engrenage",
			de: "Getriebebeschichtung",
			it: "Rivestimento di Ingranaggi",
			pt: "Blindagem de Engrenagem",
			es: "Engranaje Engrasado",
			'es-mx': "Recubrimiento de Engranajes"
		},

		effect: {
			en: "All of your Pokémon that have any {M} Energy attached take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Vos Pokémon auxquels de l'Énergie {M} est attachée subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			de: "Allen deinen Pokémon, an die mindestens 1 {M}-Energie angelegt ist, werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Tutti i tuoi Pokémon che hanno delle Energie {M} assegnate subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Todos os seus Pokémon que têm alguma Energia {M} ligada a eles recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			es: "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan alguna Energía {M} unida (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan alguna Energía {M} unida (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada",
			es: "Martillear",
			'es-mx': "Martillar"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836208
	}
}

export default card