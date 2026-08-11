import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Blastoise GX",
		fr: "Tortank GX",
		es: "Blastoise GX",
		it: "Blastoise GX",
		pt: "Blastoise GX",
		de: "Turtok GX"
	},

	illustrator: "sadaji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 240,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
				es: "Caparazón Sólido",
				it: "Guscio Solido",
				pt: "Carapaça Sólida",
				de: "Solider Panzer"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Rocket Splash",
				fr: "Canon Éclaboussant",
				es: "Salpicadura Vertiginosa",
				it: "Razzo Spruzzo",
				pt: "Borrifada de Foguete",
				de: "Raketenplatscher"
			},
			effect: {
				en: "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
				fr: "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
				es: "Pon cualquier cantidad de Energías Water de tus Pokémon en tu baraja y baraja todas las cartas. Este ataque hace 60 puntos de daño por cada carta que hayas puesto en tu baraja de esta manera.",
				it: "Rimischia nel tuo mazzo tutte le Energie Water che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai rimischiato in questo modo.",
				pt: "Embaralhe qualquer quantidade de Energia Water dos seus Pokémon no seu baralho. Este ataque causa 60 pontos de dano para cada carta embaralhada no seu baralho desta forma.",
				de: "Mische beliebig viele Water-Energien von deinen Pokémon in dein Deck. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise in dein Deck gemischten Karten zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Giant Geyser GX",
				fr: "Geyser Géant GX",
				es: "Géiser Gigante GX",
				it: "Geyser Gigante GX",
				pt: "Gêiser Gigante GX",
				de: "Riesengeysir GX"
			},
			effect: {
				en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				fr: "Attachez autant de cartes Énergie Water que vous le voulez de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Une cualquier cantidad de cartas de Energía Water de tu mano a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Assegna a piacimento ai tuoi Pokémon un numero qualsiasi di carte Energia Water dalla tua mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Ligue qualquer número de cartas de Energia Water da sua mão aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege beliebig viele Water-Energiekarten aus deiner Hand beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 372255,
		tcgplayer: 189097
	}
}

export default card
