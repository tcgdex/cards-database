import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		366,
	],

	hp: 50,

	types: [
		"Water",
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
				"Water",
			],
			name: {
				'en-us': "Sparkling Pearl",
				'fr-fr': "Perle Étincelante",
				'es-es': "Perla Centelleante",
				'it-it': "Perla Sfavillante",
				'pt-br': "Pérola Cintilante",
				'de-de': "Funkelperle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is protected by a sturdy shell. Once in a lifetime, it makes a magnificent pearl.",
	},

	thirdParty: {
		cardmarket: 361288,
		tcgplayer: 170858
	}
}

export default card
