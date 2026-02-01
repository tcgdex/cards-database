import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Phantump",
		fr: "Brocélôme de Nabil",
		es: "Phantump de Paul",
		'es-mx': "Phantump de Paul",
		de: "Hops Paragoni",
		it: "Phantump di Hop",
		pt: "Phantump do Lupo"
	},

	illustrator: "tono",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Splashing Dodge",
			fr: "Esquive Éclaboussante",
			es: "Esquivo Chapoteo",
			'es-mx': "Evasión Salpicadora",
			de: "Ausweichplatscher",
			it: "Schivata Splash",
			pt: "Evasão de Borrifada"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675907,
		cardmarket: 869706
	}
}

export default card