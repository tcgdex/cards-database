import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "otumami",

	attacks: [{
		name: {
			en: "Protect",
			fr: "Abri",
			es: "Protección",
			it: "Protezione",
			pt: "Protect",
			de: "Schutzschild"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d’attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		cost: ["Fighting"]
	}, {
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Boulder Crush",
			de: "Felsenquetscher"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	description: {
		en: "It relies on sound in order to monitor what’s in its vicinity. When angered, it will attack without ever changing the direction it’s facing."
	},

	dexId: [525]
}

export default card