import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
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
				en: "Evolutionary Advantage",
				fr: "Avantage Évolutif",
				es: "Ventaja Evolutiva",
				it: "Vantaggio Evolutivo",
				pt: "Vantagem Evolucionária",
				de: "Entwicklungsvorteil"
			},
			effect: {
				en: "If you go second, this Pokémon can evolve during your first turn.",
				fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
				es: "Si sales segundo, este Pokémon puede evolucionar durante tu primer turno.",
				it: "Se inizi per secondo, questo Pokémon può evolversi nel tuo primo turno.",
				pt: "Se você for o segundo a jogar, este Pokémon poderá evoluir durante a sua primeira vez de jogar.",
				de: "Wenn du als Zweiter am Zug bist, kann sich dieses Pokémon während deines ersten Zuges entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sparkling Pearl",
				fr: "Perle Étincelante",
				es: "Perla Centelleante",
				it: "Perla Sfavillante",
				pt: "Pérola Cintilante",
				de: "Funkelperle"
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

	thirdParty: {
		cardmarket: 361288,
		tcgplayer: 170858
	}
}

export default card
