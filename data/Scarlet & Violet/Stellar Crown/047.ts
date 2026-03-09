import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electroslug",
			fr: "Électro Frappe",
			es: "Electropuñetazo",
			it: "Elettropugno",
			pt: "Soco Elétrico",
			de: "Elektroschuss"
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Unleash Lightning",
			fr: "Déchaînement d'Éclairs",
			es: "Relámpago Desatado",
			it: "Scatenafulmini",
			pt: "Lançamento de Raios",
			de: "Blitzentladung"
		},

		effect: {
			en: "During your next turn, your Pokémon can't attack. (This includes new Pokémon that come into play.)",
			fr: "Pendant votre prochain tour, vos Pokémon ne peuvent pas attaquer. (Cela comprend les nouveaux Pokémon qui sont mis en jeu.)",
			es: "Durante tu próximo turno, tus Pokémon no pueden atacar. (Esto incluye los nuevos Pokémon que entren en juego).",
			it: "Durante il tuo prossimo turno, i tuoi Pokémon non possono attaccare. Questo include i nuovi Pokémon entrati in gioco.",
			pt: "Durante o seu próximo turno, seus Pokémon não poderão atacar. (Isto inclui novos Pokémon que entrarem em jogo.)",
			de: "Während deines nächsten Zuges können deine Pokémon nicht angreifen. (Dies schließt neue Pokémon ein, die ins Spiel gebracht werden.)"
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "chibi",

	thirdParty: {
		cardmarket: 785901
	}
}

export default card
