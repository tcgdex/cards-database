import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		147,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aqua Lift",
				fr: "Aqua-Élévation",
				es: "Empuje Acuático",
				it: "Acquapassaggio",
				pt: "Aqua Elevação",
				de: "Aquatransporter"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				es: "Si este Pokémon tiene alguna Energía Water unida a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha delle Energie Water assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver alguma Energia Water ligada a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, hat es keine Rückzugskosten."
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
				en: "Jump On",
				fr: "Saut",
				es: "Asaltar",
				it: "Salta Su",
				pt: "Pular em Cima",
				de: "Draufspringen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
