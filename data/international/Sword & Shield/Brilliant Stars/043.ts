import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [614],
	set: Set,

	name: {
		'en-us': "Beartic",
		'fr-fr': "Polagriffe",
		'es-es': "Beartic",
		'it-it': "Beartic",
		'pt-br': "Beartic",
		'de-de': "Siberio"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Sheer Cold",
			'fr-fr': "Glaciation",
			'es-es': "Frío Polar",
			'it-it': "Purogelo",
			'pt-br': "Frio Extremo",
			'de-de': "Eiseskälte"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608493,
				tcgplayer: 263743
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608493,
				tcgplayer: 263743
			}
		},
	],
}

export default card
