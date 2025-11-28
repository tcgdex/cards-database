import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		'es-mx': "Lokix",
		de: "Lextremo",
		it: "Lokix",
		pt: "Lokix"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [920],
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [920],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			'es-mx': "Patada Baja",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Jumping Shot",
			fr: "Tir Bondissant",
			es: "Disparo Saltarín",
			'es-mx': "Disparo con Salto",
			de: "Springender Schuss",
			it: "Saltocolpo",
			pt: "Salto com Disparo"
		},

		effect: {
			en: "Shuffle this Pokémon and all attached cards into your deck.",
			fr: "Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'es-mx': "Baraja este Pokémon y todas las cartas unidas a él en tu mazo.",
			de: "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857585,
	}
}

export default card