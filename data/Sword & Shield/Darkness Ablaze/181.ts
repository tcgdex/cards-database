import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Rhyperior V",
		fr: "Rhinastoc V",
		es: "Rhyperior V",
		it: "Rhyperior V",
		pt: "Rhyperior V",
		de: "Rihornior V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [464],
	set: Set,
	hp: 230,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Run",
				fr: "Tunnelier",
				es: "Taladradora",
				it: "Giravvita",
				pt: "Furação",
				de: "Schlagbohrer"
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Rock Artillery",
				fr: "Artillerie Roche Lourde",
				es: "Artillería de Rocas Pesada",
				it: "Artiglieria Roccia Pesante",
				pt: "Artilharia de Pedra Pesada",
				de: "Schweres Felsgeschütz"
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Heavy Rock Artillery.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Artillerie Roche Lourde.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Artillería de Rocas Pesada.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Artiglieria Roccia Pesante.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Artilharia de Pedra Pesada.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Schweres Felsgeschütz nicht einsetzen."
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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

	thirdParty: {
		cardmarket: 483354,
		tcgplayer: 219302
	}
}

export default card
