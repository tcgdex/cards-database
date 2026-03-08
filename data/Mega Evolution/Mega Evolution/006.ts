import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela",
		it: "Tangela",
		es: "Tangela",
		pt: "Tangela",
		'es-mx': "Tangela"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [114],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik",
			de: "Giftpuder",
			it: "Velenpolvere",
			es: "Polvo Veneno",
			pt: "Pó Venenoso",
			'es-mx': "Polvo Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Hook",
			fr: "Crochet",
			de: "Haken",
			it: "Uncino",
			es: "Garfio",
			pt: "Gancho",
			'es-mx': "Gancho"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654345,
		cardmarket: 851077
	}
}

export default card