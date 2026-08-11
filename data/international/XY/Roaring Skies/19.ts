import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'es-es': "Pelipper",
		'it-it': "Pelipper",
		'pt-br': "Pelipper",
		'de-de': "Pelipper"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'de-de': "Wingull"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Swallow",
				'fr-fr': "Avale",
				'es-es': "Tragar",
				'it-it': "Introenergia",
				'pt-br': "Engolir",
				'de-de': "Verzehrer"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d'Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill.",
	},

	thirdParty: {
		cardmarket: 282687,
		tcgplayer: 98055
	}
}

export default card
