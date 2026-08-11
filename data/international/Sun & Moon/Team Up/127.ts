import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Farfetch’d",
		'fr-fr': "Canarticho",
		'es-es': "Farfetch’d",
		'it-it': "Farfetch’d",
		'pt-br': "Farfetch’d",
		'de-de': "Porenta"
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tool Buster",
				'fr-fr': "Destructeur d’Outils",
				'es-es': "Destructor de Herramientas",
				'it-it': "Sfondaoggetto",
				'pt-br': "Aniquilador de Ferramentas",
				'de-de': "Ausrüstungsknacker"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon. If you discarded a Pokémon Tool card in this way, this attack does 70 more damage.",
				'fr-fr': "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival. Si has descartado alguna carta de Herramienta Pokémon de esta manera, este ataque hace 70 puntos de daño más.",
				'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario. Se scarti una carta Oggetto Pokémon in questo modo, questo attacco infligge 70 danni in più.",
				'pt-br': "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma carta de Ferramenta Pokémon desta forma, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "The plant stalk it holds is its weapon. The stalk is used like a sword to cut all sorts of things.",
	},
}

export default card
