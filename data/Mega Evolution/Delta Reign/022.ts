import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		'es-mx': "Torkoal"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			de: "Sengende Flammen",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
			de: "Brandbombe",
			es: "Estallido Fuego",
			it: "Combustibomba",
			pt: "Explosão de Combustão",
			'es-mx': "Combustión Explosiva"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Combustion Blast.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Explo-Combustion.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Brandbombe nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Estallido Fuego.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Combustibomba.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Explosão de Combustão.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Combustión Explosiva."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727576,
				cardmarket: 918837
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727576,
				cardmarket: 918837
			}
		}
	],
}

export default card