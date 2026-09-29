import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		de: "Flegmon",
		it: "Slowpoke",
		pt: "Slowpoke",
	},

	illustrator: "miki kudo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [79],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dopey Face",
			fr: "Tête de Crétin",
			es: "Carita Atontada",
			de: "Schnarchergesicht",
			it: "Muso da Ronfone",
			pt: "Rosto Atordoado",
		},

		effect: {
			en: "This Pokémon can't be Confused.",
			fr: "Ce Pokémon ne peut pas être Confus.",
			es: "Este Pokémon no puede pasar a estar Confundido.",
			de: "Dieses Pokémon kann nicht verwirrt werden.",
			it: "Questo Pokémon non può venire confuso.",
			pt: "Este Pokémon não pode ficar Confuso.",
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			de: "Super-Psischlag",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898176,
				tcgplayer: 706130
			}
		},
	],
}

export default card
