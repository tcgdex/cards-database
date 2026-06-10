import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [287],
	set: Set,

	name: {
		fr: "Parecool",
		en: "Slakoth",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Bâillement",
			en: "Yawn",
			es: "Bostezo",
			it: "Sbadiglio",
			pt: "Bocejo",
			de: "Gähner"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715635,
				tcgplayer: 497578,
				cardtrader: 248803
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858718
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715635,
				tcgplayer: 497578,
				cardtrader: 248803
			}
		},
	],

	illustrator: "Shigenori Negishi",

	description: {
		en: "It sleeps for 20 hours every day. Making drowsy those that see it is one of its abilities.",
	},
}

export default card
