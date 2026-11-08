import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Virizion-EX",
		'fr-fr': "Viridium EX",
		'es-es': "Virizion-EX",
		'it-it': "Virizion-EX",
		'pt-br': "Virizion-EX",
		'de-de': "Viridium-EX"
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
				'en-us': "Verdant Wind",
				'fr-fr': "Vent Verdoyant",
				'es-es': "Viento Verde Viento Verdoso",
				'it-it': "Vento Rigoglioso",
				'pt-br': "Vento Verdejante",
				'de-de': "Mahdwind"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Grass Energy attached to it can’t be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
				'fr-fr': "Chacun de vos Pokémon auquel de l’Énergie Grass est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
				'es-es': "Cada uno de tus Pokémon que tenga cualquier Energía Grass unida a él no puede verse afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon.)",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Grass assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
				'pt-br': "Cada um de seus Pokémon que possuir qualquer Energia Grass ligado a ele não poderá ser afetado por nenhuma Condição Especial. (Remova quaisquer Condições Especiais que estejam afetando estes Pokémon.)",
				'de-de': "Jedes deiner Pokémon, an das Grass-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Spezielle Zustände, von denen diese Pokémon betroffen sind, verlieren ihre Wirkung.)"
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
				'en-us': "Emerald Slash",
				'fr-fr': "Tranche Émeraude",
			},
			effect: {
				'en-us': "You may search your deck for 2 Grass Energy cards and attach them to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Vous pouvez chercher 2 cartes Énergie Grass dans votre deck et les attacher à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
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
