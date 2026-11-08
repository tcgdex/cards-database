import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ambushing Spark",
			'fr-fr': "Étincelle Guet-Apens",
			'es-es': "Chispa Emboscada",
			'it-it': "Scintillagguato",
			'pt-br': "Tocaia Cintilante",
			'de-de': "Überfallfunke"
		},

		effect: {
			'en-us': "If your opponent has used their VSTAR Power during this game, this attack does 100 more damage.",
			'fr-fr': "Si votre adversaire a utilisé sa Puissance VSTAR pendant cette partie, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si tu rival ha usado su Poder V-ASTRO durante esta partida, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il tuo avversario ha usato il suo Potere V ASTRO durante questa partita, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o seu oponente usou o Poder V-ASTRO dele(a) durante esta partida, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner während dieses Spiels seine VSTAR-Power eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its long tail serves as a ground to protect itself from its own high-voltage power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682097,
				tcgplayer: 451704
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682097,
				tcgplayer: 451704
			}
		},
	],
}

export default card
