import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [535],
	set: Set,

	name: {
		'fr-fr': "Tritonde",
		'en-us': "Tympole",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Queue Cloutée",
			'en-us': "Screw Tail",
			'es-es': "Cola Tornillo",
			'it-it': "Avvitacoda",
			'pt-br': "Cauda Parafuso",
			'de-de': "Schraubschwanz"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It uses sound waves to communicate with others of its kind. People and other Pokémon species can't hear its cries of warning.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725130,
				tcgplayer: 509775,
				cardtrader: 255610
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725130,
				tcgplayer: 509775,
				cardtrader: 255610
			}
		},
	],

	illustrator: "OKUBO",

	
}

export default card
