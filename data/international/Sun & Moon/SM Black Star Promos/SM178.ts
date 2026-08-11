import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Melmetal GX",
		'fr-fr': "Melmetal GX",
		'es-es': "Melmetal GX",
		'it-it': "Melmetal GX",
		'pt-br': "Melmetal GX",
		'de-de': "Melmetal GX"
	},
	illustrator: "PLANETA Otani",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		809,
	],
	hp: 220,
	types: [
		"Metal",
	],
	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hard Coat",
				'fr-fr': "Strate Dure",
				'es-es': "Capa Resistente",
				'it-it': "Patina Dura",
				'pt-br': "Camada Resistente",
				'de-de': "Schutzschicht"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Blast",
				'fr-fr': "Explosion Métallique",
				'es-es': "Explosión Metálica",
				'it-it': "Metalbomba",
				'pt-br': "Explosão de Metal",
				'de-de': "Metallexplosion"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Metal Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Metal attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Metal unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Metal ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Metal-Energien zu."
			},
			damage: "110+",

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Iron Force GX",
				'fr-fr': "Force de Fer GX",
				'es-es': "Fuerza Férrea GX",
				'it-it': "Potere del Metallo GX",
				'pt-br': "Força Férrea GX",
				'de-de': "Eisenkraft GX"
			},
			effect: {
				'en-us': "Attach any number of Metal Energy cards from your discard pile to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Attachez autant de cartes Énergie Metal que vous le voulez de votre pile de défausse à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Une cualquier cantidad de cartas de Energía Metal de tu pila de descartes a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Assegna un numero qualsiasi di carte Energia Metal dalla tua pila degli scarti a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Ligue qualquer número de cartas de Energia Metal da sua pilha de descarte a este Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege beliebig viele Metal-Energiekarten aus deinem Ablagestapel an dieses Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
