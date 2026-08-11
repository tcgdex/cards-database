import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lana's Aid",
		'fr-fr': "Soutien de Néphie",
		'es-es': "Ayuda de Nereida",
		'it-it': "Soccorso di Suiren",
		'pt-br': "Ajuda da Vitória",
		'de-de': "Tracys Unterstützung"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 3 in any combination of Pokémon that don't have a Rule Box and Basic Energy cards from your discard pile into your hand. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		'fr-fr': "Ajoutez à votre main une combinaison d'un maximum de 3 Pokémon sans encadré Règle et cartes Énergie de base de votre pile de défausse. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		'es-es': "Pon, en cualquier combinación, hasta 3 cartas de Energía Básica y Pokémon que no tengan un recuadro de regla de tu pila de descartes en tu mano. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
		'it-it': "Prendi fino a tre Pokémon che non hanno una regola speciale e carte Energia base in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		'pt-br': "Coloque até 3 Pokémon que não têm uma Caixa de Regras e cartas de Energia Básica da sua pilha de descarte na sua mão em qualquer combinação. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
		'de-de': "Nimm eine beliebige Kombination aus bis zu 3 Pokémon, die kein Regelfeld haben, und Basis-Energiekarten aus deinem Ablagestapel auf deine Hand. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)"
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769381,
				tcgplayer: 550251
			}
		},
	],

	illustrator: "Atsushi Furusawa",

}

export default card