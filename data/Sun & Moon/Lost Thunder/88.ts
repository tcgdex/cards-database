import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu",
		de: "Xatu"
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
		en: "Natu",
		fr: "Natu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Gaze",
				fr: "Regard Énergisant",
				es: "Mirada Energética",
				it: "Sguardo Energetico",
				pt: "Espiar Energia",
				de: "Energieblick"
			},
			effect: {
				en: "Your opponent reveals their hand. If you find any Energy cards there, this attack does 60 more damage.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez des cartes Énergie, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, este ataque hace 60 puntos de daño más.",
				it: "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, questo attacco infligge 60 danni in più.",
				pt: "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, este ataque causará 60 pontos de dano a mais.",
				de: "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, fügt diese Attacke 60 Schadenspunkte mehr zu."
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
				en: "Psychic Sphere",
				fr: "Sphère Psy",
				es: "Esfera Psíquica",
				it: "Psicosfera",
				pt: "Esfera Psíquica",
				de: "Psychosphäre"
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

	thirdParty: {
		cardmarket: 365725,
		tcgplayer: 178899
	}
}

export default card
