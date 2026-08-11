import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flying Pikachu VMAX",
		'fr-fr': "Pikachu Volant VMAX",
		'es-es': "Pikachu Vuelo VMAX",
		'it-it': "Pikachu Volo VMAX",
		'pt-br': "Pikachu Voador VMAX",
		'de-de': "Fliegendes Pikachu VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			'en-us': "Max Balloon",
			'fr-fr': "Ballomax",
			'es-es': "Maxiglobo",
			'it-it': "Dynapallone",
			'pt-br': "Balão Max",
			'de-de': "Dyna-Ballon"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 160,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,

	evolveFrom: {
		'en-us': "Flying Pikachu V",
		'fr-fr': "Pikachu Volant-V",
		'es-es': "Pikachu Vuelo V",
		'it-it': "Pikachu Volo-V",
		'pt-br': "Pikachu Voador V",
		'de-de': "Fliegendes Pikachu-V"
	},

	regulationMark: "E",
	dexId: [25],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576752,
				tcgplayer: 250305
			}
		},
	],
}

export default card
