import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		'es-mx': "Trumbeak",
		de: "Trompeck",
		it: "Trumbeak",
		pt: "Trumbeak"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [732],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pikipek"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fly",
			fr: "Vol",
			es: "Vuelo",
			'es-mx': "Vuelo",
			de: "Fliegen",
			it: "Volo",
			pt: "Voar"
		},

		cost: ["Colorless"],

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
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
