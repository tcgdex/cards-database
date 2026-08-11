import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Goodra",
		'fr-fr': "Muplodocus",
		'es-es': "Goodra",
		'it-it': "Goodra",
		'pt-br': "Goodra",
		'de-de': "Viscogon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		706,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo",
		'de-de': "Viscargot"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Slip Trip",
				'fr-fr': "Bave Glissante",
				'es-es': "Paseo Escurridizo",
				'it-it': "Scivolavia",
				'pt-br': "Escorregada",
				'de-de': "Rutschiger Weg"
			},
			effect: {
				'en-us': "Each player can't attach any Pokémon Tool cards from his or her hand to any of his or her Pokémon.",
				'fr-fr': "Aucun joueur ne peut attacher de carte Outil Pokémon de sa main à ses Pokémon.",
				'es-es': "Los jugadores no pueden unir ninguna carta de Herramienta Pokémon de su mano a ninguno de sus Pokémon.",
				'it-it': "Nessun giocatore può assegnare delle carte Oggetto Pokémon dalla propria mano ai suoi Pokémon.",
				'pt-br': "Nenhum jogador pode ligar cards de Ferramenta Pokémon da própria mão a nenhum dos Pokémon do jogador.",
				'de-de': "Kein Spieler darf Pokémon-Ausrüstungen von seiner Hand an seine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc",
				'es-es': "Pulso Dragón",
				'it-it': "Dragopulsar",
				'pt-br': "Pulso do Dragão",
				'de-de': "Drachenpuls"
			},
			effect: {
				'en-us': "Discard the top card of your deck.",
				'fr-fr': "Défaussez la carte du dessus de votre deck.",
				'es-es': "Descarta la primera carta de tu baraja.",
				'it-it': "Scarta la prima carta del tuo mazzo.",
				'pt-br': "Descarte o card de cima do seu baralho.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This very friendly Dragon-type Pokémon will hug its beloved Trainer, leaving that Trainer covered in sticky slime.",
	},

	thirdParty: {
		cardmarket: 281883,
		tcgplayer: 94645
	}
}

export default card
