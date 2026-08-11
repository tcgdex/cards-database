import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [363],
	set: Set,

	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Powder Snow",
			'fr-fr': "Poudreuse",
			'es-es': "Nieve Polvo",
			'it-it': "Polneve",
			'pt-br': "Neve em Pó",
			'de-de': "Pulverschnee"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794309,
				tcgplayer: 590062
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794309,
				tcgplayer: 590062
			}
		},
	],

	illustrator: "Teeziro",
}

export default card
