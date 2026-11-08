import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Xerneas ◇",
		'fr-fr': "Xerneas ◇",
		'es-es': "Xerneas ◇",
		'it-it': "Xerneas ◇",
		'pt-br': "Xerneas ◇",
		'de-de': "Xerneas ◇"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 160,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Path of Life",
				'fr-fr': "Chemin de l’Existence",
				'es-es': "Sendero de Creación",
				'it-it': "Cammino di Creazione",
				'pt-br': "Caminho da Vida",
				'de-de': "Pfad des Lebens"
			},
			effect: {
				'en-us': "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Energy from your other Pokémon to it.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies que vous voulez de vos autres Pokémon vers lui.",
				'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca para convertirse en tu Pokémon Activo, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina per diventare il tuo Pokémon attivo, puoi spostare un numero qualsiasi di Energie assegnate ai tuoi altri Pokémon su questo Pokémon.",
				'pt-br': "Uma vez durante a sua vez de jogar, quando este Pokémon sai do seu Banco para se tornar o seu Pokémon Ativo, você pode mover qualquer número de Energia dos seus outros Pokémon para este Pokémon.",
				'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Position des Aktiven Pokémon wechselt, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Bright Horns",
				'fr-fr': "Cornes Lumineuses",
				'es-es': "Cuernos Brillantes",
				'it-it': "Corna Splendenti",
				'pt-br': "Chifres Luminosos",
				'de-de': "Glänzendes Geweih"
			},
			effect: {
				'en-us': "This Pokémon can’t use Bright Horns during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Cuernos Brillantes durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
				'pt-br': "Este Pokémon não poderá usar Chifres Luminosos durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Glänzendes Geweih während deines nächsten Zuges nicht einsetzen."
			},
			damage: 160,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'fr-fr': "Cornes Lumineuses",
			},
			effect: {
				'fr-fr': "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.",
	},

	thirdParty: {
		cardmarket: 365781
	}
}

export default card
