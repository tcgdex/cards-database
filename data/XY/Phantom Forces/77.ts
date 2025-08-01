import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
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
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slip Trip",
				fr: "Bave Glissante",
				es: "Paseo Escurridizo",
				it: "Scivolavia",
				pt: "Escorregada",
				de: "Rutschiger Weg"
			},
			effect: {
				en: "Each player can't attach any Pokémon Tool cards from his or her hand to any of his or her Pokémon.",
				fr: "Aucun joueur ne peut attacher de carte Outil Pokémon de sa main à ses Pokémon.",
				es: "Los jugadores no pueden unir ninguna carta de Herramienta Pokémon de su mano a ninguno de sus Pokémon.",
				it: "Nessun giocatore può assegnare delle carte Oggetto Pokémon dalla propria mano ai suoi Pokémon.",
				pt: "Nenhum jogador pode ligar cards de Ferramenta Pokémon da própria mão a nenhum dos Pokémon do jogador.",
				de: "Kein Spieler darf Pokémon-Ausrüstungen von seiner Hand an seine Pokémon anlegen."
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
				en: "Dragon Pulse",
				fr: "Dracochoc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
				es: "Descarta la primera carta de tu baraja.",
				it: "Scarta la prima carta del tuo mazzo.",
				pt: "Descarte o card de cima do seu baralho.",
				de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 281883
	}
}

export default card
