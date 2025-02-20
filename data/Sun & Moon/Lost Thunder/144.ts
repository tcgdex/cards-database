import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Xerneas ◇",
		fr: "Xerneas ◇",
		es: "Xerneas ◇",
		it: "Xerneas ◇",
		pt: "Xerneas ◇",
		de: "Xerneas ◇"
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
				en: "Path of Life",
				fr: "Chemin de l’Existence",
				es: "Sendero de Creación",
				it: "Cammino di Creazione",
				pt: "Caminho da Vida",
				de: "Pfad des Lebens"
			},
			effect: {
				en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Energy from your other Pokémon to it.",
				fr: "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies que vous voulez de vos autres Pokémon vers lui.",
				es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca para convertirse en tu Pokémon Activo, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
				it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina per diventare il tuo Pokémon attivo, puoi spostare un numero qualsiasi di Energie assegnate ai tuoi altri Pokémon su questo Pokémon.",
				pt: "Uma vez durante a sua vez de jogar, quando este Pokémon sai do seu Banco para se tornar o seu Pokémon Ativo, você pode mover qualquer número de Energia dos seus outros Pokémon para este Pokémon.",
				de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Position des Aktiven Pokémon wechselt, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
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
				en: "Bright Horns",
				fr: "Cornes Lumineuses",
				es: "Cuernos Brillantes",
				it: "Corna Splendenti",
				pt: "Chifres Luminosos",
				de: "Glänzendes Geweih"
			},
			effect: {
				en: "This Pokémon can’t use Bright Horns during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Cuernos Brillantes durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
				pt: "Este Pokémon não poderá usar Chifres Luminosos durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Glänzendes Geweih während deines nächsten Zuges nicht einsetzen."
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



}

export default card
