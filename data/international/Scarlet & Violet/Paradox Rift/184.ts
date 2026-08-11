import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [825],
	set: Set,

	name: {
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Blipbug",
		'fr-fr': "Larvadar",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Protect",
			'fr-fr': "Abri",
			'es-es': "Protección",
			'it-it': "Protezione",
			'pt-br': "Proteção",
			'de-de': "Schutzschild"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740727,
				tcgplayer: 523865,
				cardtrader: 265532
			}
		},
	],

	illustrator: "Tetsu Kayama",

	
}

export default card
