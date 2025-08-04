import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ambushing Spark",
			fr: "Étincelle Guet-Apens",
			es: "Chispa Emboscada",
			it: "Scintillagguato",
			pt: "Tocaia Cintilante",
			de: "Überfallfunke"
		},

		effect: {
			en: "If your opponent has used their VSTAR Power during this game, this attack does 100 more damage.",
			fr: "Si votre adversaire a utilisé sa Puissance VSTAR pendant cette partie, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si tu rival ha usado su Poder V-ASTRO durante esta partida, este ataque hace 100 puntos de daño más.",
			it: "Se il tuo avversario ha usato il suo Potere V ASTRO durante questa partita, questo attacco infligge 100 danni in più.",
			pt: "Se o seu oponente usou o Poder V-ASTRO dele(a) durante esta partida, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn dein Gegner während dieses Spiels seine VSTAR-Power eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682097,
		tcgplayer: 451704
	}
}

export default card