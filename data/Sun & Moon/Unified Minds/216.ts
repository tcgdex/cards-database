import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Heatran GX",
		fr: "Heatran GX",
		es: "Heatran GX",
		it: "Heatran GX",
		pt: "Heatran GX",
		de: "Heatran GX"
	},

	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 190,

	types: [
		"Fire",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Road",
				fr: "Route Enflammée",
				es: "Camino Ardiente",
				it: "Scia Infuocata",
				pt: "Estrada Queimada",
				de: "Brennender Weg"
			},
			effect: {
				en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Fire Energy from your other Pokémon to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif lors de ce tour, vous pouvez déplacer des Énergies Fire attachées à vos Pokémon vers ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, puedes mover cualquier cantidad de Energía Fire unida a tus Pokémon a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, puoi spostare un numero qualsiasi di Energie Fire assegnate ai tuoi Pokémon su questo Pokémon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta vez de jogar, você poderá ligar qualquer número de Energia Fire ligada a seus Pokémon a este Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, beliebig viele Fire-Energien, die an deine Pokémon angelegt sind, auf dieses Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steaming Stomp",
				fr: "Piétinement Fumant",
				es: "Pisotón Humeante",
				it: "Pestata Incandescente",
				pt: "Pisoteada Fumegante",
				de: "Dampfstampfer"
			},

			damage: 130,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hot Burn GX",
				fr: "Brûlure Torride GX",
				es: "Quemadura Caliente GX",
				it: "Colata Rovente GX",
				pt: "Queimadura Quente GX",
				de: "Hitzebrand GX"
			},
			effect: {
				en: "This attack does 50 damage times the amount of Fire Energy attached to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Fire attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada Energía Fire unida a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni Energia Fire assegnata a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano vezes a quantidade de Energia Fire ligada a este Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Fire-Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 387957
	}
}

export default card
