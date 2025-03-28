import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Voraciousness",
			fr: "Avidité",
			es: "Glotonería",
			it: "Ingordigia",
			pt: "Esfomeado",
			de: "Unersättlichkeit"
		},

		effect: {
			en: "Once during your turn, you may put up to 2 Leftovers cards from your discard pile into your hand.",
			fr: "Une fois pendant votre tour, vous pouvez ajouter à votre main jusqu'à 2 cartes Restes de votre pile de défausse.",
			es: "Una vez durante tu turno, puedes poner hasta 2 cartas de Restos de tu pila de descartes en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi prendere fino a due carte Avanzi dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			pt: "Uma vez durante o seu turno, você poderá colocar até 2 cartas Sobras da sua pilha de descarte na sua mão.",
			de: "Einmal während deines Zuges kannst du bis zu 2 Überreste-Karten aus deinem Ablagestapel auf deine Hand nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Thudding Press",
			fr: "Pression Fracassante",
			es: "Presión Sorda",
			it: "Tonfopressa",
			pt: "Compressão de Baque",
			de: "Prallpresse"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card