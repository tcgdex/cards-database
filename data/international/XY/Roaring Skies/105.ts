import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "M Rayquaza EX",
		'fr-fr': "M-Rayquaza EX",
		'es-es': "M-Rayquaza EX",
		'it-it': "M Rayquaza EX",
		'pt-br': "M-Rayquaza EX",
		'de-de': "M-Rayquaza EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 220,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rayquaza-EX",
		'fr-fr': "Rayquaza-EX",
		'es-es': "Rayquaza-EX",
		'it-it': "Rayquaza-EX",
		'pt-br': "Rayquaza-EX",
		'de-de': "Rayquaza-EX"
	},

	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Évolution Δ",
				'en-us': "Δ Evolution",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
				'en-us': "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.",
				'es-es': "{title}: Puedes jugar esta carta de tu mano para hacer evolucionar a 1 Pokémon durante tu primer turno o durante el turno en que pongas en juego a ese Pokémon.",
				'it-it': "{title}: Puoi giocare questa carta dalla tua mano per far evolvere un Pokémon durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				'pt-br': "{title}: Você pode jogar este card de sua mão para evoluir um Pokémon durante sua primeira vez de jogar ou no turno em que jogar aquele Pokémon.",
				'de-de': "{title}: Du kannst diese Karte von deiner Hand spielen, um 1 Pokémon während deines ersten Zuges oder des Zuges, in dem du es spielst, zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Emerald Break",
				'fr-fr': "Bris'Émeraude",
				'es-es': "Rotura Esmeralda",
				'it-it': "Colposmeraldo",
				'pt-br': "Quebra Esmeralda",
				'de-de': "Grüner Einschnitt"
			},
			effect: {
				'en-us': "This attack does 30 damage times the number of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 30 danni per ogni Pokémon che hai in panchina.",
				'pt-br': "Este ataque causa 30 de danos vezes o número de Pokémon no seu Banco.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "30×",

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 98141
	}
}

export default card
