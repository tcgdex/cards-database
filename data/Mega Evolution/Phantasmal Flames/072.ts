import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		'es-mx': "Bronzong",
		de: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",
	dexId: [437],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			es: "Triple Robo",
			'es-mx': "Triple Robo",
			de: "Dreifachzug",
			it: "Pescata Tripla",
			pt: "Compra Tripla"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			'es-mx': "Roba 3 cartas.",
			de: "Ziehe 3 Karten.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tool Drop",
			fr: "Chute d'Outils",
			es: "Machaque Herramientas",
			'es-mx': "Herramientazo",
			de: "Ausrüstungssturz",
			it: "Oggettamico",
			pt: "Queda de Ferramenta"
		},

		effect: {
			en: "This attack does 40 damage for each Pokémon Tool attached to all Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Outil Pokémon attaché à tous les Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Herramienta Pokémon unida a cada Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Herramienta Pokémon unida a cada Pokémon.",
			de: "Diese Attacke fügt für jede an alle Pokémon angelegte Pokémon-Ausrüstung 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni carta Oggetto Pokémon assegnata a tutti i Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Ferramenta Pokémon ligada a todos os Pokémon."
		},

		damage: "40×"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857647
	}
}

export default card