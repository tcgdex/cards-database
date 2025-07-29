import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Softboiled",
				fr: "E-Coque",
				es: "Amortiguador",
				it: "Covauova",
				pt: "Cozidos",
				de: "Weichei"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 30 damage from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 30 dégâts à votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar una moneda. Si sale cara, cura 30 puntos de daño a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cura il tuo Pokémon attivo da 30 danni.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, cure 30 de danos do seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Heile bei „Kopf“ 30 Schadenspunkte bei deinem Aktiven Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
			},
			effect: {
				en: "This Pokémon does 60 damage to itself.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280410
	}
}

export default card
