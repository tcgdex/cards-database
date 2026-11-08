import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Alolan Ninetales",
		'fr-fr': "Feunard d’Alola",
		'es-es': "Ninetales de Alola",
		'it-it': "Ninetales di Alola",
		'pt-br': "Ninetales de Alola",
		'de-de': "Alola Vulnona"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Rubbish Blizzard",
				'fr-fr': "Blizzard de Déchets",
				'es-es': "Ventisca Basura",
				'it-it': "Bufera di Rifiuti",
				'pt-br': "Nevasca Imunda",
				'de-de': "Abfallblizzard"
			},
			effect: {
				'en-us': "This attack does 10 damage for each Pokémon Tool card in your discard pile.",
				'fr-fr': "Cette attaque inflige 10 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse.",
				'es-es': "Este ataque hace 10 puntos de daño por cada carta de Herramienta Pokémon en tu pila de descartes.",
				'it-it': "Questo attacco infligge 10 danni per ogni carta Oggetto Pokémon nella tua pila degli scarti.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada carta de Ferramenta Pokémon na sua pilha de descarte.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Pokémon-Ausrüstungen in deinem Ablagestapel zu."
			},
			damage: "10×",

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

	retreat: 1,

	description: {
		'en-us': "The reason it guides people all the way down to the mountain's base is that it wants them to hurry up and leave.",
	},

	thirdParty: {
		cardmarket: 408369,
		tcgplayer: 201965
	}
}

export default card
