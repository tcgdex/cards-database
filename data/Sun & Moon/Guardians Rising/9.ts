import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		pt: "Golisopod",
		de: "Tectass"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		768,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Armor",
				fr: "Cuirasse",
				es: "Armadura",
				it: "Corazza",
				pt: "Armadura",
				de: "Rüstung"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resolute Claws",
				fr: "Griffes Résolues",
				es: "Garras Resueltas",
				it: "Artigli Saldi",
				pt: "Garras Resolutas",
				de: "Resolute Klauen"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
