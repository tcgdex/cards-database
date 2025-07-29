import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Parabolic Counter",
				fr: "Riposte Parabolique",
				es: "Contraataque Parabólico",
				it: "Contrattacco Parabolico",
				pt: "Contra-ataque Parabólico",
				de: "Parabolkonter"
			},
			effect: {
				en: "If your opponent has any Lightning Pokémon in play, this attack does 90 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon Lightning en jeu, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Pokémon Lightning en juego, este ataque hace 90 puntos de daño más.",
				it: "Se il tuo avversario ha dei Pokémon Lightning in gioco, questo attacco infligge 90 danni in più.",
				pt: "Se o seu oponente tiver algum Pokémon Lightning em jogo, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn dein Gegner mindestens 1 Lightning-Pokémon im Spiel hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zap Kick",
				fr: "Coup de Pied Ravageur",
				es: "Electropatada",
				it: "Dinamocalcio",
				pt: "Chute Zap",
				de: "Stromtritt"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408524
	}
}

export default card
