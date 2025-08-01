import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Exhausted Tackle",
				fr: "Tacle Épuisé",
				es: "Placaje Fatigado",
				it: "Placcaggio Moscio",
				pt: "Investida Exaurida",
				de: "Erschöpfter Tackle"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage to your opponent's Active Pokémon. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Actif de votre adversaire. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño al Pokémon Activo de tu rival. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni al Pokémon attivo del tuo avversario. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos ao Pokémon Ativo do seu oponente. Se sair coroa, este Pokémon causará 30 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff dem Aktiven Pokémon deines Gegners 30 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},

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
		cardmarket: 286360
	}
}

export default card
