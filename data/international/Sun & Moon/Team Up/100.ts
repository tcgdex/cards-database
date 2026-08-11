import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		436,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Evolutionary Advantage",
				'fr-fr': "Avantage Évolutif",
				'es-es': "Ventaja Evolutiva",
				'it-it': "Vantaggio Evolutivo",
				'pt-br': "Vantagem Evolucionária",
				'de-de': "Entwicklungsvorteil"
			},
			effect: {
				'en-us': "If you go second, this Pokémon can evolve during your first turn.",
				'fr-fr': "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
				'es-es': "Si sales segundo, este Pokémon puede evolucionar durante tu primer turno.",
				'it-it': "Se inizi per secondo, questo Pokémon può evolversi nel tuo primo turno.",
				'pt-br': "Se você for o segundo a jogar, este Pokémon poderá evoluir durante a sua primeira vez de jogar.",
				'de-de': "Wenn du als Zweiter am Zug bist, kann sich dieses Pokémon während deines ersten Zuges entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
	},

	thirdParty: {
		cardmarket: 369029,
		tcgplayer: 183882
	}
}

export default card
