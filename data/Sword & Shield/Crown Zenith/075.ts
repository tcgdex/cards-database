import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [109],
	set: Set,

	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Smog",
			fr: "Purédpois",
			es: "Polución",
			it: "Smog",
			pt: "Nevoeiro de Fumaça",
			de: "Smog"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		en: "It adores polluted air. Some claim that Koffing used to be more plentiful in the Galar region than they are now.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691793,
				tcgplayer: 478208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691793,
				tcgplayer: 478208
			}
		},
	],
}

export default card
