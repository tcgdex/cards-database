import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Hisuian Growlithe",
		'fr-fr': "Caninos de Hisui",
		'es-es': "Growlithe de Hisui",
		'it-it': "Growlithe di Hisui",
		'pt-br': "Growlithe de Hisui",
		'de-de': "Hisui-Fukano"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Defensive Posture",
			'fr-fr': "Posture de Défense",
			'es-es': "Postura Defensiva",
			'it-it': "Posizione Difensiva",
			'pt-br': "Pose Defensiva",
			'de-de': "Defensive Haltung"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658659,
				tcgplayer: 272271
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658659,
				tcgplayer: 272271
			}
		},
	],
}

export default card
