import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pluck",
				fr: "Picore",
				es: "Picoteo",
				it: "Spennata",
				pt: "Colher",
				de: "Pflücker"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tools from your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
				pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille",
				es: "Pico Taladro",
				it: "Perforbecco",
				pt: "Bico Broca",
				de: "Bohrschnabel"
			},

			damage: 50,

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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies."
	}
}

export default card
