import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [548],
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'de-de': "Lilminip",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'es-es': "Petilil",
		'es-mx': "Petilil"
	},

	illustrator: "Tika Matsuno",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hide",
			'fr-fr': "Cachette",
			'de-de': "Verstecken",
			'it-it': "Nascondino",
			'pt-br': "Esconder",
			'es-es': "Ocultarse",
			'es-mx': "Escondite"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'de-de': "Blattwerk",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'es-es': "Follaje",
			'es-mx': "Follaje"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836091,
				tcgplayer: 642540
			}
		},
	]
}

export default card
