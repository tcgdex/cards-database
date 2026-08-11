import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [614],
	set: Set,

	name: {
		'fr-fr': "Polagriffe",
		'en-us': "Beartic",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Polarhume",
		'en-us': "Cubchoo",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Poing Stalactite",
			'en-us': "Icicle Punch",
			'es-es': "Puñetazo Gélido",
			'it-it': "Freddopugno",
			'pt-br': "Soco de Icelo",
			'de-de': "Eiswatsche"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Nettoyage Givré",
			'en-us': "Frost Purge",
			'es-es': "Purga Helada",
			'it-it': "Gelorimozione",
			'pt-br': "Expurgação Congelada",
			'de-de': "Eislöschung"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies de ce Pokémon.",
			'en-us': "Flip a coin. If tails, discard all Energy from this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
			'it-it': "Lancia una moneta. Se esce croce, scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
			'de-de': "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It is a ferocious, carnivorous Pokémon. Once it captures its prey, it will breathe cold air onto the prey to freeze and preserve it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725134,
				tcgplayer: 509800,
				cardtrader: 255614
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725134,
				tcgplayer: 509800,
				cardtrader: 255614
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
