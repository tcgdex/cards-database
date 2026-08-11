import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'de-de': "Deponitox",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'es-es': "Garbodor",
		'es-mx': "Garbodor"
	},

	illustrator: "Gapao",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'de-de': "Unratütox",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'es-es': "Trubbish",
		'es-mx': "Trubbish"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'de-de': "Würgegas",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'es-es': "Gas Sofocante",
			'es-mx': "Gas Sofocante"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Gunk Shot",
			'fr-fr': "Détricanon",
			'de-de': "Mülltreffer",
			'it-it': "Sporcolancio",
			'pt-br': "Tiro de Sujeira",
			'es-es': "Lanzamugre",
			'es-mx': "Lanzamugre"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836166,
				tcgplayer: 642254
			}
		},
	],
}

export default card
