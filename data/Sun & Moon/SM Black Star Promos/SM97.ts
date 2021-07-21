import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Gumshoos",
		fr: "Argouste",
		es: "Gumshoos",
		it: "Gumshoos",
		pt: "Gumshoos",
		de: "Manguspektor"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
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
		en: "Yungoos",
		fr: "Manglouton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Identify",
				fr: "Identifier",
				es: "Identificar",
				it: "Identificazione",
				pt: "Identificar",
				de: "Identifizieren"
			},
			effect: {
				en: "Your opponent reveals their hand. If you find a Pokémon there, this attack does 80 more damage.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez un Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Tu rival enseña las cartas de su mano. Si encuentras 1 Pokémon entre ellas, este ataque hace 80 puntos de daño más.",
				it: "Il tuo avversario mostra le carte che ha in mano. Se ci trovi un Pokémon, questo attacco infligge 80 danni in più.",
				pt: "Seu oponente revela a própria mão. Se você encontrar um Pokémon lá, este ataque causará 80 pontos de dano a mais.",
				de: "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Pokémon findest, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
				en: "Whap Down",
				fr: "Assommer",
				es: "Zurrar",
				it: "Bastonata",
				pt: "Golpe Ligeiro",
				de: "Verdreschen"
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



}

export default card
