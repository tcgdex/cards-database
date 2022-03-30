import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		it: "Banette",
		pt: "Banette",
		de: "Banette"
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tool Concealment",
				fr: "Outil Masqué",
				es: "Ocultación de Herramientas",
				it: "Nascondioggetto",
				pt: "Esconderijo de Ferramentas",
				de: "Ausrüstungsversteck"
			},
			effect: {
				en: "Each Pokémon Tool card in play has no effect.",
				fr: "Chaque carte Outil Pokémon en jeu n'a aucun effet.",
				es: "Las cartas de Herramienta en juego no tienen efecto.",
				it: "Nessuna carta Oggetto Pokémon in gioco ha effetto.",
				pt: "Cada um dos cards de Ferramenta Pokémon em jogo não tem efeito.",
				de: "Alle Pokémon-Ausrüstungen im Spiel haben keine Wirkung."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
