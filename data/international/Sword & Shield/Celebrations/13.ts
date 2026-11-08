import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'pt-br': "Cosmog",
		'de-de': "Cosmog"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "kirisAki",

	attacks: [{
		name: {
			'en-us': "Star Protection",
			'fr-fr': "Protection Stellaire",
			'es-es': "Protección Estelar",
			'it-it': "Protezione Stellare",
			'pt-br': "Proteção Estelar",
			'de-de': "Sternenschutz"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Whether or not it's a Pokémon from this world is a mystery. When it's in a jam, it warps away to a safe place to hide."
	},

	dexId: [789],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576758,
				tcgplayer: 250311
			}
		},
	],
}

export default card
