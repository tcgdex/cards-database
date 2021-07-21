import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Latios ◇",
		fr: "Latios ◇",
		es: "Latios ◇",
		it: "Latios ◇",
		pt: "Latios ◇",
		de: "Latios ◇"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 140,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Fleet",
				fr: "Flotte des Dragons",
				es: "Escuadra Dragón",
				it: "Dragoflotta",
				pt: "Frota de Dragões",
				de: "Drachenflotte"
			},
			effect: {
				en: "This attack does 50 damage for each of your Evolution Dragon Pokémon in play.",
				fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Dragon évolués en jeu.",
				es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon Dragon Evolución en juego.",
				it: "Questo attacco infligge 50 danni per ogni tuo Pokémon Evoluzione Dragon in gioco.",
				pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon Dragon de Evolução em jogo.",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl deiner Dragon-Entwicklungs-Pokémon im Spiel zu."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
