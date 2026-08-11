import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Gaze",
				'fr-fr': "Regard Énergisant",
				'es-es': "Mirada Energética",
				'it-it': "Sguardo Energetico",
				'pt-br': "Espiar Energia",
				'de-de': "Energieblick"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. If you find any Energy cards there, this attack does 60 more damage.",
				'fr-fr': "Votre adversaire dévoile sa main. Si vous y trouvez des cartes Énergie, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, este ataque hace 60 puntos de daño más.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, questo attacco infligge 60 danni in più.",
				'pt-br': "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Sphere",
				'fr-fr': "Sphère Psy",
				'es-es': "Esfera Psíquica",
				'it-it': "Psicosfera",
				'pt-br': "Esfera Psíquica",
				'de-de': "Psychosphäre"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
	},

	thirdParty: {
		cardmarket: 365725,
		tcgplayer: 178899
	}
}

export default card
