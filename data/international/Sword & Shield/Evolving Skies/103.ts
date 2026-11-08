import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",
	illustrator: "Souichirou Gunjima",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Phantom Transformation",
			'fr-fr': "Transformation Fantôme",
			'es-es': "Transformación Fantasmal",
			'it-it': "Trasformazione Illusoria",
			'pt-br': "Phantom Transformation",
			'de-de': "Phantom-Transformation"
		},

		effect: {
			'en-us': "Once during your turn, you may choose a Stage 1 Pokémon, except any Zoroark, from your discard pile. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez choisir un Pokémon de Niveau 1 de votre pile de défausse, à l'exception d'un Zoroark. Dans ce cas, défaussez ce Pokémon-ci et toutes les cartes attachées, puis remplacez-le par le Pokémon choisi.",
			'es-es': "Una vez durante tu turno, puedes elegir 1 Pokémon de Fase 1, excepto un Zoroark, de tu pila de descartes. Si lo haces, descarta este Pokémon y todas las cartas unidas a él, y pon el Pokémon elegido en su lugar.",
			'it-it': "Una sola volta durante il tuo turno, puoi scegliere un Pokémon di Fase 1, a eccezione di qualsiasi Zoroark, dalla tua pila degli scarti. Se lo fai, scarta questo Pokémon e tutte le carte a esso assegnate, e metti al suo posto il Pokémon che hai scelto.",
			'pt-br': "Once during your turn, you may choose a Stage 1 Pokémon, except any Zoroark, from your discard pile. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place.",
			'de-de': "Einmal während deines Zuges kannst du 1 Phase-1-Pokémon, außer Zoroark, aus deinem Ablagestapel wählen. Wenn du das machst, lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel und lege das gewählte Pokémon an seine Stelle."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Night Daze",
			'fr-fr': "Explonuit",
			'es-es': "Pulso Noche",
			'it-it': "Urtoscuro",
			'pt-br': "Night Daze",
			'de-de': "Nachtflut"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	description: {
		'en-us': "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods."
	},

	dexId: [571],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574151,
				tcgplayer: 246901
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574151,
				tcgplayer: 246901
			}
		},
	],
}

export default card
