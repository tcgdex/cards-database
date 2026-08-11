import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [543],
	set: Set,

	name: {
		en: "Venipede",
		fr: "Venipatte",
		es: "Venipede",
		it: "Venipede",
		pt: "Venipede",
		de: "Toxiped"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
			es: "Escupir Veneno",
			it: "Sputaveleno",
			pt: "Cuspe Venenoso",
			de: "Giftspucke"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		en: "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769289,
				tcgplayer: 550159
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769289,
				tcgplayer: 550159
			}
		},
	],

	illustrator: "Tomokazu Komiya",

}

export default card