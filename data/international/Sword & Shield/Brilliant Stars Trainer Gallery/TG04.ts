import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'pt-br': "Jolteon",
		'de-de': "Blitza"
	},

	illustrator: "DOM",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thunderous Awakening",
			'fr-fr': "Éveil Fulgurant",
			'es-es': "Despertar Atronador",
			'it-it': "Risveglio Tonante",
			'pt-br': "Despertar Estrondoso",
			'de-de': "Donnerndes Erwachen"
		},

		effect: {
			'en-us': "If this Pokémon has a Memory Capsule attached, Water Pokémon in play (both yours and your opponent's) have no Abilities.",
			'fr-fr': "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Water en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			'es-es': "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Water en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			'it-it': "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Water in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
			'pt-br': "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Metal em jogo (seus e do seu oponente) não terão Habilidades.",
			'de-de': "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Water-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "D",


	description: {
		'en-us': "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608736,
				tcgplayer: 264213
			}
		},
	],
}

export default card
