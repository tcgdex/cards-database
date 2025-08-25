import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		fr: "Melmetal-ex",
		en: "Melmetal ex",
		es: "Melmetal ex",
		it: "Melmetal-ex",
		pt: "Melmetal ex",
		de: "Melmetal-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Métal-Bolisme",
			en: "Metal-bolize",
			es: "Metal-bolizar",
			it: "Metalbolismo",
			pt: "Metal-bolizar",
			de: "Metall-bolisieren"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {M} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Basic {M} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {M} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {M} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {M} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{M}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Poing Métal Pur",
			en: "Full Metal Knuckle",
			es: "Nudillo Metálico Total",
			it: "Metalpugno",
			pt: "Punho Metálico Máximo",
			de: "Vollmetallfaust"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each {M} Energy attached to this Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Igarashi",

	thirdParty: {
		cardmarket: 725233
	}
}

export default card