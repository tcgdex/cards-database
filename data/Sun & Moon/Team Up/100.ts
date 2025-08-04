import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
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
				"Metal",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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

	thirdParty: {
		cardmarket: 369029,
		tcgplayer: 183882
	}
}

export default card
