import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Magma Punch",
			'fr-fr': "Poing Magma",
			'es-es': "Puño de Magma",
			'it-it': "Magma-pugno",
			'pt-br': "Soco de Magma",
			'de-de': "Magmahieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740501,
				tcgplayer: 523633,
				cardtrader: 265091
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740501,
				tcgplayer: 523633,
				cardtrader: 265091
			}
		},
	],

	illustrator: "kantaro",

	
}

export default card
