import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		en: "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Ingot Swing",
			fr: "Coup de Lingot",
			de: "Ingothieb",
			es: "Giro Lingote",
			pt: "Giro de Lingote",
			it: "Oscillabarra"
		},

		damage: 80,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon zugefügt wird, die eine Fähigkeit haben.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que tiverem uma Habilidade.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Blasting Hammer",
			fr: "Marteau Impitoyable",
			de: "Sprengender Hammer",
			es: "Martillo Explosivo",
			pt: "Martelada Avassaladora",
			it: "Martello Distruttivo"
		},

		damage: 150,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			it: "Scarta un'Energia da questo Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
