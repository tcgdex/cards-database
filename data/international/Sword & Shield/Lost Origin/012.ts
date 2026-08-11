import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [274],
	set: Set,

	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'es-es': "Oprimir",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'de-de': "Runterdrücken"
		},

		effect: {
			'en-us': "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674023,
				tcgplayer: 283877
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674023,
				tcgplayer: 283877
			}
		},
	],
}

export default card
