import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Destiny Stinger",
				fr: "Piqûre du Destin",
				es: "Aguijón Destino",
				it: "Destinopungente",
				pt: "Ferrão do Destino",
				de: "Schicksalsstich"
			},
			effect: {
				en: "You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out.",
				fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a des marqueurs de dégâts. Les deux Pokémon Actifs sont mis K.O.",
				es: "Puedes usar este ataque solo si este Pokémon tiene algún contador de daño sobre él. Ambos Pokémon Activos quedan Fuera de Combate.",
				it: "Puoi usare questo attacco solo se questo Pokémon ha dei segnalini danno. Entrambi i Pokémon attivi vengono messi KO.",
				pt: "Você só pode usar este ataque se este Pokémon tiver algum contador de dano nele. Ambos os Pokémon Ativos são Nocauteados.",
				de: "Du kannst diese Attacke nur einsetzen, wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt. Beide Aktiven Pokémon sind kampfunfähig."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
				es: "Carga Descuidada",
				it: "Carica Avventata",
				pt: "Carga Indomável",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 90,

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
		cardmarket: 368938,
		tcgplayer: 183776
	}
}

export default card
