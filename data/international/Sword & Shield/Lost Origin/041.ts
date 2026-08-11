import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [457],
	set: Set,

	name: {
		'en-us': "Lumineon",
		'fr-fr': "Luminéon",
		'es-es': "Lumineon",
		'it-it': "Lumineon",
		'pt-br': "Lumineon",
		'de-de': "Lumineon"
	},

	illustrator: "zig",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'pt-br': "Finneon",
		'de-de': "Finneon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Swim Freely",
			'fr-fr': "Nage Libre",
			'es-es': "Nado Libre",
			'it-it': "Nuotata Libera",
			'pt-br': "Nadar Sossegado",
			'de-de': "Freischwimmen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674051,
				tcgplayer: 283915
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674051,
				tcgplayer: 283915
			}
		},
	],
}

export default card
