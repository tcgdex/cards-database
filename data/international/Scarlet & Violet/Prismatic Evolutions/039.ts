import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [683],
	set: Set,

	name: {
		'en-us': "Aromatisse",
		'fr-fr': "Cocotine",
		'es-es': "Aromatisse",
		'pt-br': "Aromatisse",
		'it-it': "Aromatisse",
		'de-de': "Parfinesse"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'pt-br': "Spritzee",
		'it-it': "Spritzee",
		'de-de': "Parfi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Perfume Press",
			'fr-fr': "Pression Entêtante",
			'es-es': "Presión Perfume",
			'pt-br': "Apertão Perfumado",
			'it-it': "Profumopressa",
			'de-de': "Duftdruck"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Wintr Wandr",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805428,
				tcgplayer: 610394
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805428,
				tcgplayer: 610394
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806458,
				tcgplayer: 610562
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806459,
				tcgplayer: 610663
			}
		},
	],
}

export default card
