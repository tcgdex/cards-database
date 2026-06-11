import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886425,
				tcgplayer: 693476
			}
		},
	],

	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		'es-mx': "Deoxys",
		de: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psy Protection",
			fr: "Protection Psychique",
			es: "Psicoprotección",
			'es-mx': "Psicoprotección",
			de: "Psyschutz",
			it: "Difesa Psichica",
			pt: "Defesa Psíquica"
		},

		cost: ["Psychic", "Psychic", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon que tengan alguna Habilidad a este Pokémon.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon, die eine Fähigkeit haben, zugefügt wird.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que têm uma Habilidade."
		}
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
	regulationMark: "J",
}

export default card
