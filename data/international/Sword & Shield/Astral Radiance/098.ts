import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'en-us': "Darkrai V",
		'fr-fr': "Darkrai V",
		'es-es': "Darkrai V",
		'it-it': "Darkrai V",
		'pt-br': "Darkrai V",
		'de-de': "Darkrai V"
	},

	illustrator: "takuyoa",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Wind of Darkness",
			'fr-fr': "Vent Obscur",
			'es-es': "Viento de Oscuridad",
			'it-it': "Vento dell'Oscurità",
			'pt-br': "Vento da Escuridão",
			'de-de': "Wind der Finsternis"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Dark Void",
			'fr-fr': "Trou Noir",
			'es-es': "Brecha Negra",
			'it-it': "Vuototetro",
			'pt-br': "Vácuo da Escuridão",
			'de-de': "Schlummerort"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658747,
				tcgplayer: 272299
			}
		},
	],
}

export default card
