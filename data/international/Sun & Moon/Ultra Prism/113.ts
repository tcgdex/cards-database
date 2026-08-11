import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Gumshoos",
		'fr-fr': "Argouste",
		'es-es': "Gumshoos",
		'it-it': "Gumshoos",
		'pt-br': "Gumshoos",
		'de-de': "Manguspektor"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		735,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Identify",
				'fr-fr': "Identifier",
				'es-es': "Identificar",
				'it-it': "Identificazione",
				'pt-br': "Identificar",
				'de-de': "Identifizieren"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. If you find a Pokémon there, this attack does 80 more damage.",
				'fr-fr': "Votre adversaire dévoile sa main. Si vous y trouvez un Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Tu rival enseña las cartas de su mano. Si encuentras 1 Pokémon entre ellas, este ataque hace 80 puntos de daño más.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Se ci trovi un Pokémon, questo attacco infligge 80 danni in più.",
				'pt-br': "Seu oponente revela a própria mão. Se você encontrar um Pokémon lá, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Pokémon findest, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whap Down",
				'fr-fr': "Assommer",
				'es-es': "Zurrar",
				'it-it': "Bastonata",
				'pt-br': "Golpe Ligeiro",
				'de-de': "Verdreschen"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It adores having Rattata and Raticate for dinner, but as it's diurnal, it never encounters them. This Pokémon boasts incredible patience.",
	},

	thirdParty: {
		cardmarket: 316039,
		tcgplayer: 157730
	}
}

export default card
