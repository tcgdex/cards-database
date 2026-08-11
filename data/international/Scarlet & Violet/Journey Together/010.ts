import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'de-de': "Tarnpignon",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'es-mx': "Foongus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spore Ball",
			'fr-fr': "Boule de Spores",
			'es-es': "Bola Espora",
			'de-de': "Sporenbällchen",
			'it-it': "Pallaspore",
			'pt-br': "Bola de Esporos",
			'es-mx': "Bola Esporífera"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Saboteri",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817162,
				tcgplayer: 623437
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817162,
				tcgplayer: 623437
			}
		},
	],
}

export default card
