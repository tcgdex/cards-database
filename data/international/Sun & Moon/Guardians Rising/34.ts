import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Shard",
				'fr-fr': "Éclats Glace",
				'es-es': "Canto Helado",
				'it-it': "Geloscheggia",
				'pt-br': "Caco de Gelo",
				'de-de': "Eissplitter"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Fighting Pokémon, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Hot days cause its body to melt. It can be restored by refreezing it, but the process leaves its body slightly warped.",
	},

	thirdParty: {
		cardmarket: 297496,
		tcgplayer: 130934
	}
}

export default card
