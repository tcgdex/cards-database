import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [520],
	set: Set,

	name: {
		en: "Tranquill",
		fr: "Colombeau",
		de: "Navitaub",
		it: "Tranquill",
		pt: "Tranquill",
		es: "Tranquill",
		'es-mx': "Tranquill"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
		de: "Dusselgurr",
		it: "Pidove",
		pt: "Pidove",
		es: "Pidove",
		'es-mx': "Pidove"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fly",
			fr: "Vol",
			de: "Fliegen",
			it: "Volo",
			pt: "Voar",
			es: "Vuelo",
			'es-mx': "Vuelo"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 40
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836221
	}
}

export default card