import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [11],
	set: Set,

	name: {
		'fr-fr': "Chrysacier",
		'en-us': "Metapod",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Chenipan",
		'en-us': "Caterpie",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Posture de Défense",
			'en-us': "Defensive Posture",
			'es-es': "Postura Defensiva",
			'it-it': "Posizione Difensiva",
			'pt-br': "Pose Defensiva",
			'de-de': "Defensive Haltung"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733606,
				tcgplayer: 502560,
				cardtrader: 261195
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733606,
				tcgplayer: 502560,
				cardtrader: 261195
			}
		},
	],

	illustrator: "Tika Matsuno",

	
}

export default card
