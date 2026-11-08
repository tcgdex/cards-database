import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'es-es': "Drifblim",
		'it-it': "Drifblim",
		'pt-br': "Drifblim",
		'de-de': "Drifzepeli"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			'en-us': "Curse Spreading",
			'fr-fr': "Malédiction Disséminée",
			'es-es': "Maldición Dispersa",
			'it-it': "Spargimaledizione",
			'pt-br': "Maldição Alastrante",
			'de-de': "Ausbreitender Fluch"
		},

		effect: {
			'en-us': "Put 8 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 8 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Pon 8 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti otto segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 8 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 8 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Yuu Nishida",

	description: {
		'en-us': "It can generate and release gas within its body. That's how it can control the altitude of its drift.",
	},

	thirdParty: {
        cardmarket: 702386,
        tcgplayer: 487956
    }
}

export default card