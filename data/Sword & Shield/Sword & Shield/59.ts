import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Inteleon",
		fr: "Lézargus",
		es: "Inteleon",
		it: "Inteleon",
		pt: "Inteleon",
		de: "Intelleon"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
		es: "Drizzile",
		it: "Drizzile",
		pt: "Drizzile",
		de: "Phlegleon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Silent Shot",
				fr: "Coup Feutré",
				es: "Disparo Silencioso",
				it: "Colpo Silente",
				pt: "Disparo Silencioso",
				de: "Stiller Schuss"
			},
			effect: {
				en: "Discard a random card from your opponent’s hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				it: "Scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Descarte 1 carta aleatória da mão do seu oponente.",
				de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Snipe",
				fr: "Hydro-Frappe",
				es: "Disparo Acuático",
				it: "Idromira",
				pt: "Hidroatirador",
				de: "Hydroschütze"
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				it: "Puoi prendere un’Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				pt: "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
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
		en: "It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air."
	}
}

export default card
