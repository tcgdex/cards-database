import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Cosmog",
		fr: "Cosmog",
		es: "Cosmog",
		it: "Cosmog",
		pt: "Cosmog",
		de: "Cosmog"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "kirisAki",

	attacks: [{
		name: {
			en: "Star Protection",
			fr: "Protection Stellaire",
			es: "Protección Estelar",
			it: "Protezione Stellare",
			pt: "Proteção Estelar",
			de: "Sternenschutz"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
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
		en: "Whether or not it's a Pokémon from this world is a mystery. When it's in a jam, it warps away to a safe place to hide."
	},

	dexId: [789],

	thirdParty: {
		cardmarket: 576758,
		tcgplayer: 250311
	}
}

export default card
