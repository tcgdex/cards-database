import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
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
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sweet Veil",
				fr: "Gluco-Voile",
				es: "Velo Dulce",
				it: "Dolcevelo",
				pt: "Véu Doce",
				de: "Zuckerhülle"
			},
			effect: {
				en: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
				fr: "Chacun de vos Pokémon auquel de l'Énergie Fairy est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
				es: "Cada uno de tus Pokémon que tenga alguna Energía Fairy unida a él no se puede ver afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon).",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Fairy assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
				pt: "Cada um de seus Pokémon que possuir qualquer Energia Fairy ligada a ele não poderá ser afetado por nenhuma Condição Especial. (Remova todas as Condições Especiais que afetam esses Pokémon.)",
				de: "Jedes deiner Pokémon, an das Fairy-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesen Pokémon verlieren ihre Wirkung.)"
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
				en: "Draining Kiss",
				fr: "Vampibaiser",
				es: "Beso Drenaje",
				it: "Dragonair",
				pt: "Beijo Drenante",
				de: "Diebeskuss"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 de danos deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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



}

export default card
