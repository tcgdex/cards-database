import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		pt: "Duskull",
		it: "Duskull",
		de: "Zwirrlicht"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Come and Get You",
			fr: "Viens me Chercher",
			es: "Voy a por Ti",
			pt: "Vim te Buscar",
			it: "Passo a Prenderti",
			de: "Ich krieg dich"
		},

		effect: {
			en: "Put up to 3 Duskull from your discard pile onto your Bench.",
			fr: "Placez jusqu'à 3 Skelénox de votre pile de défausse sur votre Banc.",
			es: "Pon hasta 3 Duskull de tu pila de descartes en tu Banca.",
			pt: "Coloque até 3 Duskull da sua pilha de descarte no seu Banco.",
			it: "Prendi fino a tre Duskull dalla tua pila degli scarti e mettili nella tua panchina.",
			de: "Lege bis zu 3 Zwirrlicht aus deinem Ablagestapel auf deine Bank."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			pt: "Resmungo",
			it: "Borbottio",
			de: "Grummeln"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card