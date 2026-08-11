import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [18],
	set: Set,

	name: {
		'fr-fr': "Roucarnage-ex",
		'en-us': "Pidgeot ex",
		'es-es': "Pidgeot ex",
		'it-it': "Pidgeot-ex",
		'pt-br': "Pidgeot ex",
		'de-de': "Tauboss-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Roucoups",
		'en-us': "Pidgeotto",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Recherche Rapide",
			'en-us': "Quick Search",
			'es-es': "Búsqueda Rápida",
			'it-it': "Ricerca Rapida",
			'pt-br': "Busca Rápida",
			'de-de': "Schnelle Suche"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent Recherche Rapide par tour.",
			'en-us': "Once during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck. You can't use more than 1 Quick Search Ability each turn.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de una habilidad Búsqueda Rápida en cada turno.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi usare l'abilità Ricerca Rapida solo una volta per turno.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Busca Rápida por turno.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Schnelle Suche nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Vent en Rafales",
			'en-us': "Blustery Wind",
			'es-es': "Ventarrón",
			'it-it': "Vento Impetuoso",
			'pt-br': "Ventania Agitada",
			'de-de': "Stürmischer Wind"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'en-us': "You may discard a Stadium in play.",
			'es-es': "Puedes descartar 1 Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar um Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725305,
				tcgplayer: 509983,
				cardtrader: 255666
			}
		},
	],

	suffix: "ex",
	illustrator: "Jerky",

	
}

export default card
