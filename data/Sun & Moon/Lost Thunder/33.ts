import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Heal",
				fr: "Soin Fleuris",
				es: "Curación Floral",
				it: "Cura Botanica",
				pt: "Cura Floral",
				de: "Blumenheilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from your Active Grass Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à votre Pokémon Grass Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a tu Pokémon Grass Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare il tuo Pokémon Grass attivo da 20 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano do seu Pokémon Grass Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei deinem Aktiven Grass-Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365673,
		tcgplayer: 178834
	}
}

export default card
