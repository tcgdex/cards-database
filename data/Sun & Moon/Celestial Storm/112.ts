import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
		es: "Pelipper",
		it: "Pelipper",
		pt: "Pelipper",
		de: "Pelipper"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Firefighting",
				fr: "Anti-Flammes",
				es: "Antiincendios",
				it: "Estinzione",
				pt: "Apagar Incêndios",
				de: "Feuerwehr"
			},
			effect: {
				en: "Discard a Fire Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie Fire du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Fire del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia Fire assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Fire do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Fire-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

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



}

export default card
