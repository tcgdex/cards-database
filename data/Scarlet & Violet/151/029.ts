import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [29],
	set: Set,

	name: {
		fr: "Nidoran♀",
		en: "Nidoran♀",
		es: "Nidoran♀",
		it: "Nidoran♀",
		pt: "Nidoran♀",
		de: "Nidoran♀"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Corne Empoisonnée",
			en: "Poison Horn",
			es: "Cuerno Veneno",
			it: "Velencorno",
			pt: "Chifre Venenoso",
			de: "Gifthorn"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
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
	regulationMark: "G",

	description: {
		en: "It uses its hard incisor teeth to crush and eat berries. The tip of a female Nidoran's horn is a bit more rounded than the tip of a male's horn.",
		de: "Mit ihren harten Vorderzähnen zerteilen sie Beeren, bevor sie diese essen. Die Spitze ihres Horns ist etwas abgerundeter als bei Männchen."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733624,
				tcgplayer: 515994,
				cardtrader: 261134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733624,
				tcgplayer: 515994,
				cardtrader: 261134
			}
		},
	],

	illustrator: "Teeziro",

	
}

export default card
