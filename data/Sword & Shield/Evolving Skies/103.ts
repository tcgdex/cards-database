import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
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
			en: "Phantom Transformation",
			fr: "Transformation Fantôme",
			es: "Transformación Fantasmal",
			it: "Trasformazione Illusoria",
			pt: "Phantom Transformation",
			de: "Phantom-Transformation"
		},

		effect: {
			en: "Once during your turn, you may choose a Stage 1 Pokémon, except any Zoroark, from your discard pile. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place.",
			fr: "Une fois pendant votre tour, vous pouvez choisir un Pokémon de Niveau 1 de votre pile de défausse, à l'exception d'un Zoroark. Dans ce cas, défaussez ce Pokémon-ci et toutes les cartes attachées, puis remplacez-le par le Pokémon choisi.",
			es: "Una vez durante tu turno, puedes elegir 1 Pokémon de Fase 1, excepto un Zoroark, de tu pila de descartes. Si lo haces, descarta este Pokémon y todas las cartas unidas a él, y pon el Pokémon elegido en su lugar.",
			it: "Una sola volta durante il tuo turno, puoi scegliere un Pokémon di Fase 1, a eccezione di qualsiasi Zoroark, dalla tua pila degli scarti. Se lo fai, scarta questo Pokémon e tutte le carte a esso assegnate, e metti al suo posto il Pokémon che hai scelto.",
			pt: "Once during your turn, you may choose a Stage 1 Pokémon, except any Zoroark, from your discard pile. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place.",
			de: "Einmal während deines Zuges kannst du 1 Phase-1-Pokémon, außer Zoroark, aus deinem Ablagestapel wählen. Wenn du das machst, lege dieses Pokémon und alle angelegten Karten auf deinen Ablagestapel und lege das gewählte Pokémon an seine Stelle."
		}
	}],

	attacks: [{
		name: {
			en: "Night Daze",
			fr: "Explonuit",
			es: "Pulso Noche",
			it: "Urtoscuro",
			pt: "Night Daze",
			de: "Nachtflut"
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
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	description: {
		en: "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods."
	},

	dexId: [571],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574151,
		tcgplayer: 246901
	}
}

export default card
