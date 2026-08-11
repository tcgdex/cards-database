import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ardent Dancing",
			'fr-fr': "Danse Embrasée",
			'es-es': "Danza Ardiente",
			'it-it': "Danza Ardente",
			'pt-br': "Dança Calorosa",
			'de-de': "Inbrünstiger Tanz"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from your Active Evolution Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Évolutif Actif.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Evolución Activo.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon Evoluzione attivo da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon de Evolução Ativo.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Entwicklungs-Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
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
				cardmarket: 751652,
				tcgplayer: 534494,
				cardtrader: 274297
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "This Pokémon is incredibly popular, possibly because its passionate dancing is a great match with the temperament of Paldean people.",
	},

}

export default card
