import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
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
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Destiny Stinger",
				'fr-fr': "Piqûre du Destin",
				'es-es': "Aguijón Destino",
				'it-it': "Destinopungente",
				'pt-br': "Ferrão do Destino",
				'de-de': "Schicksalsstich"
			},
			effect: {
				'en-us': "You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out.",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si ce Pokémon a des marqueurs de dégâts. Les deux Pokémon Actifs sont mis K.O.",
				'es-es': "Puedes usar este ataque solo si este Pokémon tiene algún contador de daño sobre él. Ambos Pokémon Activos quedan Fuera de Combate.",
				'it-it': "Puoi usare questo attacco solo se questo Pokémon ha dei segnalini danno. Entrambi i Pokémon attivi vengono messi KO.",
				'pt-br': "Você só pode usar este ataque se este Pokémon tiver algum contador de dano nele. Ambos os Pokémon Ativos são Nocauteados.",
				'de-de': "Du kannst diese Attacke nur einsetzen, wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt. Beide Aktiven Pokémon sind kampfunfähig."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata",
				'pt-br': "Carga Indomável",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
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

	description: {
		'en-us': "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
	},

	thirdParty: {
		cardmarket: 368938,
		tcgplayer: 183776
	}
}

export default card
