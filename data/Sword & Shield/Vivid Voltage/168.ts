import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Talonflame V",
		fr: "Flambusard V",
		es: "Talonflame V",
		it: "Talonflame V",
		pt: "Talonflame V",
		de: "Fiaro V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
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
				en: "Fast Flight",
				fr: "Envol Soudain",
				es: "Vuelo Veloz",
				it: "Volo Rapido",
				pt: "Voo Rápido",
				de: "Rasanter Flug"
			},
			effect: {
				en: "If you go first, you can use this attack during your first turn. Discard your hand and draw 6 cards.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Défaussez votre main et piochez 6 cartes.",
				es: "Si sales primero, puedes usar este ataque durante tu primer turno. Descarta las cartas de tu mano y roba 6 cartas.",
				it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Scarta le carte che hai in mano e pesca sei carte.",
				pt: "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Descarte a sua mão e compre 6 cartas.",
				de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Wing",
				fr: "Ailes Lumineuses",
				es: "Ala Brillante",
				it: "Ala di Luce",
				pt: "Asa Brilhante",
				de: "Strahlenschwinge"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un'Energia da questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
