import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Narumi Sato",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Keep Hidden",
			fr: "Resté Caché",
			de: "Versteckt halten",
			es: "A Escondidas",
			it: "Stare Nascosto",
			'es-mx': "Fuera de Vista"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire.",
			de: "Solange dieses Pokémon auf deiner Bank ist, verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
			es: "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			de: "Mini-Stromstoß",
			es: "Carga Diminuta",
			it: "Sottocarica Minuscola",
			'es-mx': "Minicarga"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card