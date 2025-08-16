import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		de: "Deponitox",
		it: "Garbodor",
		pt: "Garbodor",
		es: "Garbodor",
		'es-mx': "Garbodor"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			de: "Würgegas",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			es: "Gas Sofocante",
			'es-mx': "Gas Sofocante"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Gunk Shot",
			fr: "Détricanon",
			de: "Mülltreffer",
			it: "Sporcolancio",
			pt: "Tiro de Sujeira",
			es: "Lanzamugre",
			'es-mx': "Lanzamugre"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836012
	}
}

export default card