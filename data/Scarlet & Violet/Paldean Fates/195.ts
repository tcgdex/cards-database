import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Darkness", "Colorless"],

		name: {
			en: "Acceleration Drive",
			fr: "Conduite Accélérée",
			es: "Impulso Aceleración",
			it: "Propulsione Rapida",
			pt: "Câmbio Acelerado",
			de: "Schnellganggetriebe"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card