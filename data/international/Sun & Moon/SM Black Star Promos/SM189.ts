import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [9],
	name: {
		'fr-fr': "Tortank GX",
		'en-us': "Blastoise GX",
		'es-es': "Blastoise GX",
		'it-it': "Blastoise GX",
		'pt-br': "Blastoise GX",
		'de-de': "Turtok GX"
	},
	illustrator: "sadaji",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		'fr-fr': "Carabaffe",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'fr-fr': "Coquille Dure",
				'en-us': "Solid Shell",
				'es-es': "Caparazón Sólido",
				'it-it': "Guscio Solido",
				'pt-br': "Carapaça Sólida",
				'de-de': "Solider Panzer"
			},
			effect: {
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
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
				"Water",
				"Water",
			],
			name: {
				'fr-fr': "Canon Éclaboussant",
				'en-us': "Rocket Splash",
				'es-es': "Salpicadura Vertiginosa",
				'it-it': "Razzo Spruzzo",
				'pt-br': "Borrifada de Foguete",
				'de-de': "Raketenplatscher"
			},
			effect: {
				'fr-fr': "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
				'en-us': "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
				'es-es': "Pon cualquier cantidad de Energías Water de tus Pokémon en tu baraja y baraja todas las cartas. Este ataque hace 60 puntos de daño por cada carta que hayas puesto en tu baraja de esta manera.",
				'it-it': "Rimischia nel tuo mazzo tutte le Energie Water che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai rimischiato in questo modo.",
				'pt-br': "Embaralhe qualquer quantidade de Energia Water dos seus Pokémon no seu baralho. Este ataque causa 60 pontos de dano para cada carta embaralhada no seu baralho desta forma.",
				'de-de': "Mische beliebig viele Water-Energien von deinen Pokémon in dein Deck. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise in dein Deck gemischten Karten zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'fr-fr': "Geyser Géant GX",
				'en-us': "Giant Geyser GX",
				'es-es': "Géiser Gigante GX",
				'it-it': "Geyser Gigante GX",
				'pt-br': "Gêiser Gigante GX",
				'de-de': "Riesengeysir GX"
			},
			effect: {
				'fr-fr': "Attachez autant de cartes Énergie Water que vous le voulez de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'en-us': "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'es-es': "Une cualquier cantidad de cartas de Energía Water de tu mano a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Assegna a piacimento ai tuoi Pokémon un numero qualsiasi di carte Energia Water dalla tua mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Ligue qualquer número de cartas de Energia Water da sua mão aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege beliebig viele Water-Energiekarten aus deiner Hand beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
