import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [451],

	name: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		'es-mx': "Skorupi",
		de: "Pionskora",
		it: "Skorupi",
		pt: "Skorupi"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			es: "Puya Nociva",
			'es-mx': "Golpe Venenoso",
			de: "Gifthieb",
			it: "Velenpuntura",
			pt: "Golpe Envenenado"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684432,
		cardmarket: 877467
	}
}

export default card
