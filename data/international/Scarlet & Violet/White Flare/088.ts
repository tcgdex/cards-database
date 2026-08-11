import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [541],
	set: Set,

	name: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'de-de': "Folikon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'es-es': "Swadloon",
		'es-mx': "Swadloon"
	},

	illustrator: "0313",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'de-de': "Strawickl",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'es-es': "Sewaddle",
		'es-mx': "Sewaddle"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Healing Leaves",
			'fr-fr': "Feuillage Apaisant",
			'de-de': "Heilende Blätter",
			'it-it': "Foglie Curative",
			'pt-br': "Folhas Curativas",
			'es-es': "Hojas Curativas",
			'es-mx': "Hojas Sanadoras"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from your Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
			'es-mx': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Bug Buzz",
			'fr-fr': "Bourdon",
			'de-de': "Käfergebrumm",
			'it-it': "Ronzio",
			'pt-br': "Zumbido de Inseto",
			'es-es': "Zumbido",
			'es-mx': "Zumbido"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836072,
				tcgplayer: 642203
			}
		},
	],
}

export default card
