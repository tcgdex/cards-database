import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Snorlax V",
		'fr-fr': "Ronflex V",
		'es-es': "Snorlax V",
		'it-it': "Snorlax V",
		'pt-br': "Snorlax V",
		'de-de': "Relaxo V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
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
				'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Falling Down",
				'fr-fr': "Écroulement",
				'es-es': "Desplome",
				'it-it': "Tombolone",
				'pt-br': "Capotar",
				'de-de': "Hinfallen"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
				'es-es': "Este Pokémon pasa a estar Dormido.",
				'it-it': "Questo Pokémon viene addormentato.",
				'pt-br': "Este Pokémon agora está Adormecido.",
				'de-de': "Dieses Pokémon schläft jetzt."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [143],

	thirdParty: {
		cardmarket: 437079,
		tcgplayer: 208458
	}
}

export default card
