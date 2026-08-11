import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electroslug",
			'fr-fr': "Électro Frappe",
			'es-es': "Electropuñetazo",
			'it-it': "Elettropugno",
			'pt-br': "Soco Elétrico",
			'de-de': "Elektroschuss"
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Unleash Lightning",
			'fr-fr': "Déchaînement d'Éclairs",
			'es-es': "Relámpago Desatado",
			'it-it': "Scatenafulmini",
			'pt-br': "Lançamento de Raios",
			'de-de': "Blitzentladung"
		},

		effect: {
			'en-us': "During your next turn, your Pokémon can't attack. (This includes new Pokémon that come into play.)",
			'fr-fr': "Pendant votre prochain tour, vos Pokémon ne peuvent pas attaquer. (Cela comprend les nouveaux Pokémon qui sont mis en jeu.)",
			'es-es': "Durante tu próximo turno, tus Pokémon no pueden atacar. (Esto incluye los nuevos Pokémon que entren en juego).",
			'it-it': "Durante il tuo prossimo turno, i tuoi Pokémon non possono attaccare. Questo include i nuovi Pokémon entrati in gioco.",
			'pt-br': "Durante o seu próximo turno, seus Pokémon não poderão atacar. (Isto inclui novos Pokémon que entrarem em jogo.)",
			'de-de': "Während deines nächsten Zuges können deine Pokémon nicht angreifen. (Dies schließt neue Pokémon ein, die ins Spiel gebracht werden.)"
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785901,
				tcgplayer: 567273
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785901,
				tcgplayer: 567273
			}
		},
	],

	illustrator: "chibi",

}

export default card
