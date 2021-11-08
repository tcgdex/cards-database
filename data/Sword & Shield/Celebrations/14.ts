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
		en: "Cosmoem",
		fr: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		pt: "Cosmoem",
		de: "Cosmovum"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
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

	retreat: 3,

	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
		es: "Cosmog",
		it: "Cosmog",
		pt: "Cosmog",
		de: "Cosmog"
	},

	regulationMark: "E",

	description: {
		en: "As it absorbs light, Cosmoem continues to grow. Its golden shell is surprisingly solid."
	},

	dexId: [790]
}

export default card
