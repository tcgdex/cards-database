import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [164],
	set: Set,

	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Silent Wing",
			'fr-fr': "Aile Silencieuse",
			'es-es': "Ala Silenciosa",
			'it-it': "Ala Silenziosa",
			'pt-br': "Asa Silenciosa",
			'de-de': "Lautlose Flügel"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar",
			'de-de': "Luftschnitt"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658782,
				tcgplayer: 272356
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658782,
				tcgplayer: 272356
			}
		},
	],
}

export default card
