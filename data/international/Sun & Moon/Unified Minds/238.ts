import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Heatran GX",
		'fr-fr': "Heatran GX",
		'es-es': "Heatran GX",
		'it-it': "Heatran GX",
		'pt-br': "Heatran GX",
		'de-de': "Heatran GX"
	},

	illustrator: "ConceptLab",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 190,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Burning Road",
				'fr-fr': "Route Enflammée",
				'es-es': "Camino Ardiente",
				'it-it': "Scia Infuocata",
				'pt-br': "Estrada Queimada",
				'de-de': "Brennender Weg"
			},
			effect: {
				'en-us': "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Fire Energy from your other Pokémon to it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif lors de ce tour, vous pouvez déplacer des Énergies Fire attachées à vos Pokémon vers ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, puedes mover cualquier cantidad de Energía Fire unida a tus Pokémon a este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, puoi spostare un numero qualsiasi di Energie Fire assegnate ai tuoi Pokémon su questo Pokémon.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta vez de jogar, você poderá ligar qualquer número de Energia Fire ligada a seus Pokémon a este Pokémon.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, beliebig viele Fire-Energien, die an deine Pokémon angelegt sind, auf dieses Pokémon verschieben."
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
				'en-us': "Steaming Stomp",
				'fr-fr': "Piétinement Fumant",
				'es-es': "Pisotón Humeante",
				'it-it': "Pestata Incandescente",
				'pt-br': "Pisoteada Fumegante",
				'de-de': "Dampfstampfer"
			},

			damage: 130,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hot Burn GX",
				'fr-fr': "Brûlure Torride GX",
				'es-es': "Quemadura Caliente GX",
				'it-it': "Colata Rovente GX",
				'pt-br': "Queimadura Quente GX",
				'de-de': "Hitzebrand GX"
			},
			effect: {
				'en-us': "This attack does 50 damage times the amount of Fire Energy attached to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Fire attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Energía Fire unida a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Energia Fire assegnata a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano vezes a quantidade de Energia Fire ligada a este Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Fire-Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 388982,
		tcgplayer: 194943
	}
}

export default card
