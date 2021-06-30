import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
		es: "Hakamo-o",
		it: "Hakamo-o",
		pt: "Hakamo-o",
		de: "Mediras"
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
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fighter’s Roar",
				fr: "Rugissement de Combat",
				es: "Rugido de Luchador",
				it: "Urlo del Combattente",
				pt: "Rugido do Guerreiro",
				de: "Kampfschrei"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-GX or Pokémon-EX, this Pokémon can evolve during the turn you play it.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou Pokémon-EX, ce Pokémon-ci peut évoluer pendant le tour où il est mis en jeu.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este Pokémon puede evolucionar durante el turno en que lo pongas en juego.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo Pokémon può evolversi durante il turno in cui l’hai giocato.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este Pokémon poderá evoluir durante a vez de jogar em que for colocado em jogo.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder Pokémon-EX ist, kann sich dieses Pokémon während des Zuges, in dem du es spielst, entwickeln."
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
				en: "Dragonslice",
				fr: "Draco-Tranche",
				es: "Tajo Dragón",
				it: "Dragotrancia",
				pt: "Talhada do Dragão",
				de: "Drachenschnetzler"
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



}

export default card
