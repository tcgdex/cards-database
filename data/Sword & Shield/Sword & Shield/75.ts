import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Boltund",
		fr: "Fulgudog",
		es: "Boltund",
		it: "Boltund",
		pt: "Boltund",
		de: "Bellektro"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
				es: "Gran Mordisco",
				it: "Grande Morso",
				pt: "Mordidona",
				de: "Mächtiger Biss"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fighting Fangs",
				fr: "Crocs Combatifs",
				es: "Colmillos Luchadores",
				it: "Zanne Combattenti",
				pt: "Caninos de Luta",
				de: "Kämpfende Reißzähne"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon V o un Pokémon-GX, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V o un Pokémon-GX, questo attacco infligge 90 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V ou um Pokémon-GX, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V oder Pokémon-GX ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
