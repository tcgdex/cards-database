import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Farfetch’d",
		fr: "Canarticho",
		es: "Farfetch’d",
		it: "Farfetch’d",
		pt: "Farfetch’d",
		de: "Porenta"
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
				en: "Collect",
				fr: "Collecte",
				es: "Coleccionar",
				it: "Tassa",
				pt: "Coleta",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tool Buster",
				fr: "Destructeur d’Outils",
				es: "Destructor de Herramientas",
				it: "Sfondaoggetto",
				pt: "Aniquilador de Ferramentas",
				de: "Ausrüstungsknacker"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon. If you discarded a Pokémon Tool card in this way, this attack does 70 more damage.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival. Si has descartado alguna carta de Herramienta Pokémon de esta manera, este ataque hace 70 puntos de daño más.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario. Se scarti una carta Oggetto Pokémon in questo modo, questo attacco infligge 70 danni in più.",
				pt: "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma carta de Ferramenta Pokémon desta forma, este ataque causará 70 pontos de dano a mais.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
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



}

export default card
