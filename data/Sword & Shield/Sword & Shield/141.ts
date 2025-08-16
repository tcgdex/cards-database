import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Snorlax V",
		fr: "Ronflex V",
		es: "Snorlax V",
		it: "Snorlax V",
		pt: "Snorlax V",
		de: "Relaxo V"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare V",
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
				en: "Swallow",
				fr: "Avale",
				es: "Tragar",
				it: "Introenergia",
				pt: "Engolir",
				de: "Verzehrer"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
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
				en: "Falling Down",
				fr: "Écroulement",
				es: "Desplome",
				it: "Tombolone",
				pt: "Capotar",
				de: "Hinfallen"
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
				es: "Este Pokémon pasa a estar Dormido.",
				it: "Questo Pokémon viene addormentato.",
				pt: "Este Pokémon agora está Adormecido.",
				de: "Dieses Pokémon schläft jetzt."
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
		cardmarket: 427236,
		tcgplayer: 208457
	}
}

export default card
