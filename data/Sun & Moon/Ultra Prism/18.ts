import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},
	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		126,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Controlled Burn",
				fr: "Feu Contrôlé",
				es: "Fuego Controlado",
				it: "Incendio Preventivo",
				pt: "Fogo Controlado",
				de: "Brandrodung"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a primeira carta do baralho do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
