import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Shroodle",
		fr: "Gribouraigne",
		de: "Sproxi",
		it: "Shroodle",
		es: "Shroodle",
		pt: "Shroodle",
		'es-mx': "Shroodle"
	},

	illustrator: "osare",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [944],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			de: "Gifthieb",
			it: "Velenpuntura",
			es: "Puya Nociva",
			pt: "Golpe Envenenado",
			'es-mx': "Golpe Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 20
	}],

	retreat: 1,
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
		tcgplayer: 654430,
		cardmarket: 851162
	}
}

export default card