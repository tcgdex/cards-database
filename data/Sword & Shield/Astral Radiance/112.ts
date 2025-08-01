import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Heatproof",
			fr: "Ignifugé",
			es: "Ignífugo",
			it: "Antifuoco",
			pt: "À Prova de Calor",
			de: "Hitzeschutz"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire del tuo avversario.",
			pt: "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658773
	}
}

export default card