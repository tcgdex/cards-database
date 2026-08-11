import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Rhyperior V",
		'fr-fr': "Rhinastoc V",
		'es-es': "Rhyperior V",
		'it-it': "Rhyperior V",
		'pt-br': "Rhyperior V",
		'de-de': "Rihornior V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Holo Rare V",
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
				'en-us': "Drill Run",
				'fr-fr': "Tunnelier",
				'es-es': "Taladradora",
				'it-it': "Giravvita",
				'pt-br': "Furação",
				'de-de': "Schlagbohrer"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				'en-us': "Heavy Rock Artillery",
				'fr-fr': "Artillerie Roche Lourde",
				'es-es': "Artillería de Rocas Pesada",
				'it-it': "Artiglieria Roccia Pesante",
				'pt-br': "Artilharia de Pedra Pesada",
				'de-de': "Schweres Felsgeschütz"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Heavy Rock Artillery.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Artillerie Roche Lourde.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Artillería de Rocas Pesada.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Artiglieria Roccia Pesante.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Artilharia de Pedra Pesada.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schweres Felsgeschütz nicht einsetzen."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483354,
				tcgplayer: 219488
			}
		},
	],
}

export default card
