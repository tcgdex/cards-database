import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [220],
	set: Set,

	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'de-de': "Quiekel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Icy Wind",
			'fr-fr': "Vent Glace",
			'es-es': "Viento Hielo",
			'it-it': "Ventogelato",
			'pt-br': "Vento Congelante",
			'de-de': "Eissturm"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Swinub excels at sniffing out mushrooms buried beneath grass or snow. Since ancient times, the people of Hisui have often relied upon this skill.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658538,
				tcgplayer: 272231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658538,
				tcgplayer: 272231
			}
		},
	],
}

export default card
