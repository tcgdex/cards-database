import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [548],
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule",
		de: "Lilminip",
		it: "Petilil",
		pt: "Petilil",
		es: "Petilil",
		'es-mx': "Petilil"
	},

	illustrator: "mele",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hide",
			fr: "Cachette",
			de: "Verstecken",
			it: "Nascondino",
			pt: "Esconder",
			es: "Ocultarse",
			'es-mx': "Escondite"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			de: "Blattwerk",
			it: "Fogliame",
			pt: "Folhagem",
			es: "Follaje",
			'es-mx': "Follaje"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835914
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835914
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836263
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836273
			}
		}
	],
}

export default card
