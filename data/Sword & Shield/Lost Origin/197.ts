import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		en: "Kyurem VMAX",
		fr: "Kyurem VMAX",
		es: "Kyurem VMAX",
		it: "Kyurem VMAX",
		pt: "Kyurem VMAX",
		de: "Kyurem VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		en: "Kyurem V",
		fr: "Kyurem-V",
		es: "Kyurem V",
		it: "Kyurem-V",
		pt: "Kyurem V",
		de: "Kyurem-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Glaciated World",
			fr: "Monde Glacé",
			es: "Mundo Glacial",
			it: "Mondo Congelato",
			pt: "Mundo Glacial",
			de: "Eiszeitwelt"
		},

		effect: {
			en: "Once during your turn, you may discard the top card of your deck. If that card is a Water Energy card, attach it to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez défausser la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Water, attachez-la à l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes descartar la primera carta de tu baraja. Si es una carta de Energía Water, únela a 1 de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi scartare la prima carta del tuo mazzo. Se quella carta è una carta Energia Water, assegnala a uno dei tuoi Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá descartar a carta de cima do seu baralho. Se aquela carta for uma carta de Energia Water, ligue-a a 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn jene Karte eine Water-Energiekarte ist, lege sie an 1 deiner Pokémon an."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Max Frost",
			fr: "Givromax",
			es: "Maxiescarcha",
			it: "Dynabrina",
			pt: "Geada Max",
			de: "Dyna-Kälte"
		},

		effect: {
			en: "You may discard any amount of Water Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies Water que vous le voulez de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar cualquier cantidad de Energías Water de este Pokémon. Este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie Water che vuoi da questo Pokémon. Questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar qualquer quantidade de Energia Water deste Pokémon. Este ataque causa 50 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst beliebig viele Water-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card