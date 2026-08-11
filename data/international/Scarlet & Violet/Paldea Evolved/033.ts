import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'fr-fr': "Plumeline",
		'en-us': "Oricorio",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Danse Embrasée",
			'en-us': "Ardent Dancing",
			'es-es': "Danza Ardiente",
			'it-it': "Danza Ardente",
			'pt-br': "Dança Calorosa",
			'de-de': "Inbrünstiger Tanz"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Évolutif Actif.",
			'en-us': "Once during your turn, you may heal 20 damage from your Active Evolution Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Evolución Activo.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon Evoluzione attivo da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon de Evolução Ativo.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Entwicklungs-Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715506,
				tcgplayer: 497444,
				cardtrader: 248614
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715506,
				tcgplayer: 497444,
				cardtrader: 248614
			}
		},
	],

	illustrator: "Haru Akasaka",

	description: {
		'en-us': "This Pokémon is incredibly popular, possibly because its passionate dancing is a great match with the temperament of Paldean people.",
	},
}

export default card
