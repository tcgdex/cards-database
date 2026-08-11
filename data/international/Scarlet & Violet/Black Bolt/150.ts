import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [521],
	set: Set,

	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'de-de': "Fasasnob",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'es-es': "Unfezant",
		'es-mx': "Unfezant"
	},

	illustrator: "Yoshioka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'de-de': "Navitaub",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'es-es': "Tranquill",
		'es-mx': "Tranquill"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Add On",
			'fr-fr': "Ajout",
			'de-de': "Hinzufügen",
			'it-it': "Supplemento",
			'pt-br': "Adicionar",
			'es-es': "Sumar",
			'es-mx': "Acarrear"
		},

		effect: {
			'en-us': "Draw 4 cards.",
			'fr-fr': "Piochez 4 cartes.",
			'de-de': "Ziehe 4 Karten.",
			'it-it': "Pesca quattro carte.",
			'pt-br': "Compre 4 cartas.",
			'es-es': "Roba 4 cartas.",
			'es-mx': "Roba 4 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Swift Flight",
			'fr-fr': "Vol Véloce",
			'de-de': "Flinker Flug",
			'it-it': "Volo Veloce",
			'pt-br': "Voo Veloz",
			'es-es': "Vuelo Súbito",
			'es-mx': "Vuelo Rápido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836222,
				tcgplayer: 642604
			}
		},
	]
}

export default card
