import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [187],
	set: Set,

	name: {
		'fr-fr': "Granivol",
		'en-us': "Hoppip",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Esquive Éclaboussante",
			'en-us': "Splashing Dodge",
			'es-es': "Esquivo Chapoteo",
			'it-it': "Schivata Splash",
			'pt-br': "Evasão de Borrifada",
			'de-de': "Ausweichplatscher"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715473,
				tcgplayer: 497412,
				cardtrader: 248297
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715473,
				tcgplayer: 497412,
				cardtrader: 248297
			}
		},
	],

	illustrator: "Yukiko Baba",

	description: {
		'en-us': "This Pokémon is blown across vast distances by the wind. It is unclear where the Hoppip of Paldea originally came from.",
	},
}

export default card
