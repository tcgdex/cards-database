import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'es-es': "Slowking",
		'it-it': "Slowking",
		'pt-br': "Slowking",
		'de-de': "Laschoking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Seek Inspiration",
			'fr-fr': "Recherche d'Inspiration",
			'es-es': "Búsqueda de Inspiración",
			'it-it': "Cerca Ispirazione",
			'pt-br': "Buscar Inspiração",
			'de-de': "Inspirationssuche"
		},

		effect: {
			'en-us': "Discard the top card of your deck, and if that card is a Pokémon that doesn't have a Rule Box, choose 1 of its attacks and use it as this attack. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
			'fr-fr': "Défaussez la carte du dessus de votre deck. Si cette carte est un Pokémon sans encadré Règle, choisissez l'une de ses attaques et utilisez-la en tant que cette attaque. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
			'es-es': "Descarta la primera carta de tu baraja y, si esa carta es un Pokémon que no tiene un recuadro de regla, elige uno de sus ataques y úsalo para este ataque. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
			'it-it': "Scarta la prima carta del tuo mazzo e, se quella carta è un Pokémon che non ha una regola speciale, scegli uno dei suoi attacchi e usalo al posto di questo attacco. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
			'pt-br': "Descarte a carta de cima do seu baralho, e se aquela carta for um Pokémon que não tiver uma Caixa de Regras, escolha 1 dos seus ataques e use-o como este ataque. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel, und wenn jene Karte ein Pokémon ist, das kein Regelfeld hat, wähle 1 seiner Attacken und setze sie als diese Attacke ein. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785912,
				tcgplayer: 567284
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785912,
				tcgplayer: 567284
			}
		},
	],

	illustrator: "Tetsu Kayama",

}

export default card
