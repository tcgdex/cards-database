import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		667,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wild Dash",
				fr: "Panique Sauvage",
				es: "Carrera Salvaje",
				it: "Scatto Selvaggio",
				pt: "Fuga Selvagem",
				de: "Wilder Spurt"
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Si tu rival tiene algún Pokémon-GX o Pokémon-EX en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se il tuo avversario ha dei Pokémon-GX o dei Pokémon-EX in gioco, questo Pokémon non ha costo di ritirata.",
				pt: "Se o seu oponente tiver algum Pokémon-GX ou Pokémon-EX em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn dein Gegner mindestens 1 Pokémon-GX oder Pokémon-EX im Spiel hat, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365690,
		tcgplayer: 178855
	}
}

export default card
