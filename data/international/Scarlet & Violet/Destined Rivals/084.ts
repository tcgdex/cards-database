import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'en-us': "Steven's Claydol",
		'fr-fr': "Kaorine de Pierre",
		'de-de': "Troys Lepumentas",
		'it-it': "Claydol di Rocco",
		'es-es': "Claydol de Máximo",
		'pt-br': "Claydol do Steven",
		'es-mx': "Claydol de Steven"
	},


	illustrator: "nagimiso",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Steven's Baltoy",
		'fr-fr': "Balbuto de Pierre",
		'de-de': "Troys Puppance",
		'it-it': "Baltoy di Rocco",
		'es-es': "Baltoy de Máximo",
		'pt-br': "Baltoy do Steven",
		'es-mx': "Baltoy de Steven"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Eerie Light",
			'fr-fr': "Lumière Étrange",
			'de-de': "Gespenstisches Licht",
			'it-it': "Luci Inquietanti",
			'es-es': "Luz Lúgubre",
			'pt-br': "Luz Misteriosa",
			'es-mx': "Luz Inquietante"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Clay Blast",
			'fr-fr': "Explosion d'Argile",
			'de-de': "Lehmdetonation",
			'it-it': "Esplosione d'Argilla",
			'es-es': "Explosión de Barro",
			'pt-br': "Explosão de Argila",
			'es-mx': "Explosión de Barro"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 220
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
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825958,
				tcgplayer: 632894
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825958,
				tcgplayer: 632894
			}
		},
	],
}

export default card
