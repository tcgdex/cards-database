import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff",
		'de-de': "Sabbaione"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sweet Veil",
				'fr-fr': "Gluco-Voile",
				'es-es': "Velo Dulce",
				'it-it': "Dolcevelo",
				'pt-br': "Véu Doce",
				'de-de': "Zuckerhülle"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
				'fr-fr': "Chacun de vos Pokémon auquel de l'Énergie Fairy est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
				'es-es': "Cada uno de tus Pokémon que tenga alguna Energía Fairy unida a él no se puede ver afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon).",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Fairy assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
				'pt-br': "Cada um de seus Pokémon que possuir qualquer Energia Fairy ligada a ele não poderá ser afetado por nenhuma Condição Especial. (Remova todas as Condições Especiais que afetam esses Pokémon.)",
				'de-de': "Jedes deiner Pokémon, an das Fairy-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesen Pokémon verlieren ihre Wirkung.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Draining Kiss",
				'fr-fr': "Vampibaiser",
				'es-es': "Beso Drenaje",
				'it-it': "Dragonair",
				'pt-br': "Beijo Drenante",
				'de-de': "Diebeskuss"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	thirdParty: {
		cardmarket: 281432,
		tcgplayer: 89349
	}
}

export default card
