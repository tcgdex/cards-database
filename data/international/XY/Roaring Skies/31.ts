import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette",
		'de-de': "Banette"
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
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tool Concealment",
				'fr-fr': "Outil Masqué",
				'es-es': "Ocultación de Herramientas",
				'it-it': "Nascondioggetto",
				'pt-br': "Esconderijo de Ferramentas",
				'de-de': "Ausrüstungsversteck"
			},
			effect: {
				'en-us': "Each Pokémon Tool card in play has no effect.",
				'fr-fr': "Chaque carte Outil Pokémon en jeu n'a aucun effet.",
				'es-es': "Las cartas de Herramienta en juego no tienen efecto.",
				'it-it': "Nessuna carta Oggetto Pokémon in gioco ha effetto.",
				'pt-br': "Cada um dos cards de Ferramenta Pokémon em jogo não tem efeito.",
				'de-de': "Alle Pokémon-Ausrüstungen im Spiel haben keine Wirkung."
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
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
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

	description: {
		'en-us': "Strong feelings of hatred turned a puppet into a Pokémon. If it opens its mouth, its cursed energy escapes.",
	},

	thirdParty: {
		cardmarket: 282699,
		tcgplayer: 98067
	}
}

export default card
