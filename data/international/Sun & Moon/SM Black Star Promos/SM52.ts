import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'it-it': "Golisopod",
		'pt-br': "Golisopod",
		'de-de': "Tectass"
	},
	illustrator: "Naoki Saito",
	rarity: "Promo",
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
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Armor",
				'fr-fr': "Cuirasse",
				'es-es': "Armadura",
				'it-it': "Corazza",
				'pt-br': "Armadura",
				'de-de': "Rüstung"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Resolute Claws",
				'fr-fr': "Griffes Résolues",
				'es-es': "Garras Resueltas",
				'it-it': "Artigli Saldi",
				'pt-br': "Garras Resolutas",
				'de-de': "Resolute Klauen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 70 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, este ataque hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, questo attacco infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, este ataque causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder ein Pokémon-EX ist, fügt diese Attacke 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
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




	description: {
		'en-us': "With a flashing slash of its giant sharp claws, it cleaves seawater—or even air—right in two.",
	},
}

export default card
