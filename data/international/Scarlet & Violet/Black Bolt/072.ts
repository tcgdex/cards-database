import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [520],
	set: Set,

	name: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'de-de': "Navitaub",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'es-es': "Tranquill",
		'es-mx': "Tranquill"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'de-de': "Dusselgurr",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'es-es': "Pidove",
		'es-mx': "Pidove"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fly",
			'fr-fr': "Vol",
			'de-de': "Fliegen",
			'it-it': "Volo",
			'pt-br': "Voar",
			'es-es': "Vuelo",
			'es-mx': "Vuelo"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 40
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836055,
				tcgplayer: 642523
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836055,
				tcgplayer: 642523
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836456,
				tcgplayer: 642764
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836457,
				tcgplayer: 642691
			}
		}
	]
}

export default card
