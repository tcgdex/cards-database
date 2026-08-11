import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		'fr-fr': "Rondoudou",
		'en-us': "Jigglypuff",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Berceuse",
			'en-us': "Sing",
			'es-es': "Canto",
			'it-it': "Canto",
			'pt-br': "Canção",
			'de-de': "Gesang"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Gifle",
			'en-us': "Slap",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715558,
				tcgplayer: 497496,
				cardtrader: 248710
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715558,
				tcgplayer: 497496,
				cardtrader: 248710
			}
		},
	],

	illustrator: "Yuu Nishida",

	description: {
		'en-us': "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
	},
}

export default card
