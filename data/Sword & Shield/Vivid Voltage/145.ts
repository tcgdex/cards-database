import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		pt: "Toucannon",
		de: "Tukanon"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Cutoff",
				fr: "Coupure d’Énergie",
				es: "Corte de Energía",
				it: "Calopotenza",
				pt: "Corte de Energia",
				de: "Energiesperre"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia dal Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Loop Cannon",
				fr: "Canon Cyclique",
				es: "Cañón en Bucle",
				it: "Cannone Perpetuo",
				pt: "Canhão em Loop",
				de: "Loop-Kanone"
			},
			effect: {
				en: "Put 2 Energy attached to this Pokémon into your hand.",
				fr: "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
				es: "Pon 2 Energías unidas a este Pokémon en tu mano.",
				it: "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
				de: "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
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

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Known for forming harmonious couples, this Pokémon is brought to wedding ceremonies as a good luck charm."
	}
}

export default card
