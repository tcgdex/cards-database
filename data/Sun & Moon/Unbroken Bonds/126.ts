import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
				es: "Puntapié",
				it: "Calciobasso",
				pt: "Movimento Baixo",
				de: "Fußtritt"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Rush Up",
				fr: "En Toute Hâte",
				es: "Apresurarse",
				it: "Corsa Affrettata",
				pt: "Avanço Apressado",
				de: "Ansturm"
			},
			effect: {
				en: "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
				fr: "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si has unido 1 carta de Herramienta Pokémon de tu mano a este Pokémon durante este turno, este ataque hace 70 puntos de daño más.",
				it: "Se hai assegnato una carta Oggetto Pokémon a questo Pokémon dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				pt: "Se você ligou uma carta de Ferramenta Pokémon da sua mão a este Pokémon durante esta vez de jogar, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn du während dieses Zuges eine Pokémon-Ausrüstung aus deiner Hand an dieses Pokémon angelegt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 370789
	}
}

export default card
