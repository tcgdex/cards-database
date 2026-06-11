import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		fr: "Axoloto de Paldea",
		en: "Paldean Wooper",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea",
		de: "Paldea-Felino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Crache-Venin",
			en: "Spit Poison",
			es: "Escupir Veneno",
			it: "Sputaveleno",
			pt: "Cuspe Venenoso",
			de: "Giftspucke"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725206,
				tcgplayer: 509880,
				cardtrader: 255811
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725206,
				tcgplayer: 509880,
				cardtrader: 255811
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
