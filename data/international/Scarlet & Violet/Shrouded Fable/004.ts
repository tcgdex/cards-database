import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "United Wings",
			'fr-fr': "Ailes Unies",
			'es-es': "Alas Unidas",
			'it-it': "Ali Unite",
			'pt-br': "União Alada",
			'de-de': "Vereinte Schwingen"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Tetsu Kayama",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780892,
				tcgplayer: 560314
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780892,
				tcgplayer: 560314
			}
		},
	],
}

export default card
