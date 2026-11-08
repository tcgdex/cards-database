import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
		'es-es': "Hakamo-o",
		'it-it': "Hakamo-o",
		'pt-br': "Hakamo-o",
		'de-de': "Mediras"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		783,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fighter’s Roar",
				'fr-fr': "Rugissement de Combat",
				'es-es': "Rugido de Luchador",
				'it-it': "Urlo del Combattente",
				'pt-br': "Rugido do Guerreiro",
				'de-de': "Kampfschrei"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or Pokémon-EX, this Pokémon can evolve during the turn you play it.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou Pokémon-EX, ce Pokémon-ci peut évoluer pendant le tour où il est mis en jeu.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este Pokémon puede evolucionar durante el turno en que lo pongas en juego.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo Pokémon può evolversi durante il turno in cui l’hai giocato.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este Pokémon poderá evoluir durante a vez de jogar em que for colocado em jogo.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder Pokémon-EX ist, kann sich dieses Pokémon während des Zuges, in dem du es spielst, entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				'en-us': "Dragonslice",
				'fr-fr': "Draco-Tranche",
				'es-es': "Tajo Dragón",
				'it-it': "Dragotrancia",
				'pt-br': "Talhada do Dragão",
				'de-de': "Drachenschnetzler"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It makes noise by clanging its scales together. When the rhythm has reached its peak, Hakamo-o attacks.",
	},

	thirdParty: {
		cardmarket: 408439,
		tcgplayer: 201283
	}
}

export default card
