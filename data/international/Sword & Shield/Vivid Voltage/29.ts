import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Talonflame V",
		'fr-fr': "Flambusard V",
		'es-es': "Talonflame V",
		'it-it': "Talonflame V",
		'pt-br': "Talonflame V",
		'de-de': "Fiaro V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [663],
	set: Set,
	hp: 190,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fast Flight",
				'fr-fr': "Envol Soudain",
				'es-es': "Vuelo Veloz",
				'it-it': "Volo Rapido",
				'pt-br': "Voo Rápido",
				'de-de': "Rasanter Flug"
			},
			effect: {
				'en-us': "If you go first, you can use this attack during your first turn. Discard your hand and draw 6 cards.",
				'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Défaussez votre main et piochez 6 cartes.",
				'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno. Descarta las cartas de tu mano y roba 6 cartas.",
				'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Scarta le carte che hai in mano e pesca sei carte.",
				'pt-br': "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Descarte a sua mão e compre 6 cartas.",
				'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Bright Wing",
				'fr-fr': "Ailes Lumineuses",
				'es-es': "Ala Brillante",
				'it-it': "Ala di Luce",
				'pt-br': "Asa Brilhante",
				'de-de': "Strahlenschwinge"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un'Energia da questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
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
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511565,
				tcgplayer: 226401
			}
		},
	],
}

export default card
