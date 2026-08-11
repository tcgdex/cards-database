import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Virizion-EX",
		fr: "Viridium EX",
		es: "Virizion-EX",
		it: "Virizion-EX",
		pt: "Virizion-EX",
		de: "Viridium-EX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Verdant Wind",
				fr: "Vent Verdoyant",
				es: "Viento Verde Viento Verdoso",
				it: "Vento Rigoglioso",
				pt: "Vento Verdejante",
				de: "Mahdwind"
			},
			effect: {
				en: "Each of your Pokémon that has any Grass Energy attached to it can’t be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
				fr: "Chacun de vos Pokémon auquel de l’Énergie Grass est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
				es: "Cada uno de tus Pokémon que tenga cualquier Energía Grass unida a él no puede verse afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon.)",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Grass assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
				pt: "Cada um de seus Pokémon que possuir qualquer Energia Grass ligado a ele não poderá ser afetado por nenhuma Condição Especial. (Remova quaisquer Condições Especiais que estejam afetando estes Pokémon.)",
				de: "Jedes deiner Pokémon, an das Grass-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Spezielle Zustände, von denen diese Pokémon betroffen sind, verlieren ihre Wirkung.)"
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
				en: "Emerald Slash",
				fr: "Tranche Émeraude",
			},
			effect: {
				en: "You may search your deck for 2 Grass Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Vous pouvez chercher 2 cartes Énergie Grass dans votre deck et les attacher à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
