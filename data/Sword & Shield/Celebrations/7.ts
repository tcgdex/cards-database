import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Flying Pikachu VMAX",
		fr: "Pikachu Volant VMAX",
		es: "Pikachu Vuelo VMAX",
		it: "Pikachu Volo VMAX",
		pt: "Pikachu Voador VMAX",
		de: "Fliegendes Pikachu VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			en: "Max Balloon",
			fr: "Ballomax",
			es: "Maxiglobo",
			it: "Dynapallone",
			pt: "Balão Max",
			de: "Dyna-Ballon"
		},

		effect: {
			en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: "160",
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
		en: "Flying Pikachu V",
		fr: "Pikachu Volant-V",
		es: "Pikachu Vuelo V",
		it: "Pikachu Volo-V",
		pt: "Pikachu Voador V",
		de: "Fliegendes Pikachu-V"
	},

	suffix: "V"
}

export default card