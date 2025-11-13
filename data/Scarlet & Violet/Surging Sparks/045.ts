import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [365],
	set: Set,

	name: {
		en: "Walrein",
		fr: "Kaimorse",
		es: "Walrein",
		it: "Walrein",
		pt: "Walrein",
		de: "Walraisa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Frigid Fangs",
			fr: "Crocs Glacés",
			es: "Colmillos Glaciales",
			it: "Zanne Glaciali",
			pt: "Presas Gélidas",
			de: "Frostige Fänge"
		},

		effect: {
			en: "During your opponent's next turn, Pokémon that have 2 or less Energy attached can't attack. (This includes new Pokémon that come into play.)",
			fr: "Pendant le prochain tour de votre adversaire, les Pokémon auxquels 2 Énergies ou moins sont attachées ne peuvent pas attaquer. (Cela comprend les nouveaux Pokémon qui sont mis en jeu.)",
			es: "Durante el próximo turno de tu rival, los Pokémon que tengan 2 Energías o menos unidas no pueden atacar. (Esto incluye los nuevos Pokémon que entren en juego).",
			it: "Durante il prossimo turno del tuo avversario, i Pokémon che hanno due o meno Energie assegnate non possono attaccare. Questo include i nuovi Pokémon entrati in gioco.",
			pt: "Durante o próximo turno do seu oponente, os Pokémon que tiverem 2 ou menos Energias ligadas a eles não poderão atacar. (Isto inclui novos Pokémon que entrarem em jogo.)",
			de: "Während des nächsten Zuges deines Gegners können Pokémon, an die 2 oder weniger Energien angelegt sind, nicht angreifen. (Dies schließt neue Pokémon ein, die ins Spiel gebracht werden.)"
		},

		damage: 60
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
			es: "Caída Megatón",
			it: "Caduta Megatonica",
			pt: "Queda do Megaton",
			de: "Megatonnenfall"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Mitsuhiro Arita",

	thirdParty: {
		cardmarket: 794311
	}
}

export default card
