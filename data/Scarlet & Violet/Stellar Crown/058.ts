import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		it: "Slowking",
		pt: "Slowking",
		de: "Laschoking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Seek Inspiration",
			fr: "Recherche d'Inspiration",
			es: "Búsqueda de Inspiración",
			it: "Cerca Ispirazione",
			pt: "Buscar Inspiração",
			de: "Inspirationssuche"
		},

		effect: {
			en: "Discard the top card of your deck, and if that card is a Pokémon that doesn't have a Rule Box, choose 1 of its attacks and use it as this attack. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte est un Pokémon sans encadré Règle, choisissez l'une de ses attaques et utilisez-la en tant que cette attaque. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
			es: "Descarta la primera carta de tu baraja y, si esa carta es un Pokémon que no tiene un recuadro de regla, elige uno de sus ataques y úsalo para este ataque. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
			it: "Scarta la prima carta del tuo mazzo e, se quella carta è un Pokémon che non ha una regola speciale, scegli uno dei suoi attacchi e usalo al posto di questo attacco. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
			pt: "Descarte a carta de cima do seu baralho, e se aquela carta for um Pokémon que não tiver uma Caixa de Regras, escolha 1 dos seus ataques e use-o como este ataque. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel, und wenn jene Karte ein Pokémon ist, das kein Regelfeld hat, wähle 1 seiner Attacken und setze sie als diese Attacke ein. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card