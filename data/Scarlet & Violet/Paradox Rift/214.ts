import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buggy Turbo",
			fr: "Turbo Bogué",
			es: "Turbo Defectuoso",
			it: "Turbo Malfunzionante",
			pt: "Turbo Bugado",
			de: "Verbuggter Turbo"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, attach up to 4 Basic Energy cards from your discard pile to this Pokémon. If tails, discard an Energy from this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, attachez jusqu'à 4 cartes Énergie de base de votre pile de défausse à ce Pokémon. Si c'est pile, défaussez une Énergie de ce Pokémon.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, une hasta 4 cartas de Energía Básica de tu pila de descartes a este Pokémon. Si sale cruz, descarta 1 Energía de este Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, assegna a questo Pokémon fino a quattro carte Energia base dalla tua pila degli scarti. Se esce croce, scarta un'Energia da questo Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, ligue até 4 cartas de Energia Básica da sua pilha de descarte a este Pokémon. Se sair coroa, descarte uma Energia deste Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Lege bei Kopf bis zu 4 Basis-Energiekarten aus deinem Ablagestapel an dieses Pokémon an. Lege bei Zahl 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energized Attack",
			fr: "Attaque Énergisée",
			es: "Ataque Energético",
			it: "Attacco Energizzato",
			pt: "Ataque Energético",
			de: "Energiegeladener Angriff"
		},

		effect: {
			en: "This attack does 40 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card