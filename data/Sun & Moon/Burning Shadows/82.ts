import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d’Alola",
		es: "Raticate de Alola",
		it: "Raticate di Alola",
		pt: "Raticate de Alola",
		de: "Alola-Rattikarl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Enhanced Fang",
				fr: "Croc Amélioré",
				es: "Incisivos Mejorados",
				it: "Zanne Super",
				pt: "Presa Acentuada",
				de: "Spezial-Zahn"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hyper Fang",
				fr: "Croc de Mort",
				es: "Hipercolmillo",
				it: "Iperzanna",
				pt: "Hiperpresa",
				de: "Hyperzahn"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299484
	}
}

export default card
