import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Grafaiai",
		fr: "Tag-Tag",
		es: "Grafaiai",
		it: "Grafaiai",
		pt: "Grafaiai",
		de: "Affiti"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mischievous Painting",
			fr: "Toile Malicieuse",
			es: "Pinturas Traviesas",
			it: "Disegni Birichini",
			pt: "Pintura Maliciosa",
			de: "Freche Malerei"
		},

		effect: {
			en: "Attach up to 3 Energy cards from your opponent's discard pile to their Pokémon in any way you like.",
			fr: "Attachez jusqu'à 3 cartes Énergie de la pile de défausse de votre adversaire à ses Pokémon comme il vous plaît.",
			es: "Une hasta 3 cartas de Energía de la pila de descartes de tu rival a sus Pokémon de la manera que desees.",
			it: "Assegna ai Pokémon del tuo avversario fino a tre carte Energia dalla sua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 3 cartas de Energia da pilha de descarte do seu oponente aos Pokémon dele como desejar.",
			de: "Lege bis zu 3 Energiekarten aus dem Ablagestapel deines Gegners beliebig an seine Pokémon an."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Energized Graffiti",
			fr: "Graffiti Énergisé",
			es: "Grafiti Energético",
			it: "Graffiti Energizzati",
			pt: "Grafite Energizado",
			de: "Energiegeladenes Graffiti"
		},

		effect: {
			en: "This attack does 40 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "NC Empire",

	thirdParty: {
		cardmarket: 794465
	}
}

export default card
