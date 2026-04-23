import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Litten",
		fr: "Flamiaou",
		de: "Flamiau",
		it: "Litten",
		es: "Litten",
		pt: "Litten",
		'es-mx': "Litten"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [725],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
			de: "Feuerzahn",
			it: "Rogodenti",
			es: "Colmillo Ígneo",
			pt: "Presas de Fogo",
			'es-mx': "Colmillo Ígneo"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875193
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
