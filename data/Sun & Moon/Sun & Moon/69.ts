import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Smack Down",
				fr: "Anti-Air",
				es: "Antiaéreo",
				it: "Abbattimento",
				pt: "Derrubada",
				de: "Katapult"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has Fighting Resistance, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene Resistencia a Fighting, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha resistenza al tipo Fighting, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver Resistência Fighting, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners eine Resistenz gegenüber Fighting-Pokémon hat, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295380
	}
}

export default card
