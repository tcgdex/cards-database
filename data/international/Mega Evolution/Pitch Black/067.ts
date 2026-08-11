import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'es-mx': "Trumbeak",
		'de-de': "Trompeck",
		'it-it': "Trumbeak",
		'pt-br': "Trumbeak"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [732],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Pikipek"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fly",
			'fr-fr': "Vol",
			'es-es': "Vuelo",
			'es-mx': "Vuelo",
			'de-de': "Fliegen",
			'it-it': "Volo",
			'pt-br': "Voar"
		},

		cost: ["Colorless"],

		damage: 30,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895851,
				tcgplayer: 704824
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895851,
				tcgplayer: 704824
			}
		},
	],
}

export default card
