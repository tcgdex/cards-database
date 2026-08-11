import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gathering of Cats",
				'fr-fr': "Rassemblement de Chats",
				'es-es': "Reunión de Gatos",
				'it-it': "Raduno Felino",
				'pt-br': "Reunião de Gatos",
				'de-de': "Katzentreffen"
			},
			effect: {
				'en-us': "Ignore all Energy in the attack costs of each of your Pokémon in play that has the Caturday attack.",
				'fr-fr': "Ignorez toutes les Énergies dans le coût d’attaque de vos Pokémon en jeu qui ont l’attaque Chamedi.",
				'es-es': "Ignora todas las Energías en los costes de los ataques de cada uno de tus Pokémon en juego que tenga el ataque Sábado Gatuno.",
				'it-it': "Ignora tutte le Energie necessarie per usare gli attacchi dei tuoi Pokémon in gioco che hanno l’attacco Giornogatto.",
				'pt-br': "Ignore todas as Energias nos custos dos ataques de cada um dos seus Pokémon em jogo que tiver o ataque Dia de Gato.",
				'de-de': "Ignoriere alle Energien in den Kosten der Attacken jedes deiner Pokémon im Spiel, das die Attacke Schnurrtag hat."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Although the jewel on its forehead appears to be a different color than those of Alolan Persian, it's mostly made of the same material.",
	},

	thirdParty: {
		cardmarket: 372434,
		tcgplayer: 189248
	}
}

export default card
