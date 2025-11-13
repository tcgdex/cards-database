import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [521],
	set: Set,

	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		de: "Fasasnob",
		it: "Unfezant",
		pt: "Unfezant",
		es: "Unfezant",
		'es-mx': "Unfezant"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
		de: "Navitaub",
		it: "Tranquill",
		pt: "Tranquill",
		es: "Tranquill",
		"es-mx": "Tranquill"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Add On",
			fr: "Ajout",
			de: "Hinzufügen",
			it: "Supplemento",
			pt: "Adicionar",
			es: "Sumar",
			'es-mx': "Acarrear"
		},

		effect: {
			en: "Draw 4 cards.",
			fr: "Piochez 4 cartes.",
			de: "Ziehe 4 Karten.",
			it: "Pesca quattro carte.",
			pt: "Compre 4 cartas.",
			es: "Roba 4 cartas.",
			'es-mx': "Roba 4 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Swift Flight",
			fr: "Vol Véloce",
			de: "Flinker Flug",
			it: "Volo Veloce",
			pt: "Voo Veloz",
			es: "Vuelo Súbito",
			'es-mx': "Vuelo Rápido"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836222
	}
}

export default card