import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		'en-us': "Virizion V",
		'fr-fr': "Viridium V",
		'es-es': "Virizion V",
		'it-it': "Virizion V",
		'pt-br': "Virizion V",
		'de-de': "Viridium V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
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
			'en-us': "Each of your Pokémon that has any Grass Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)",
			'fr-fr': "Chacun de vos Pokémon auquel de l'Énergie Grass est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
			'es-es': "Cada uno de tus Pokémon que tenga cualquier Energía Grass unida a él no puede verse afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon.)",
			'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Grass assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
			'pt-br': "Cada um de seus Pokémon que possuir qualquer Energia Grass ligado a ele não poderá ser afetado por nenhuma Condição Especial. (Remova quaisquer Condições Especiais que estejam afetando estes Pokémon.)",
			'de-de': "Jedes deiner Pokémon, an das Grass-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Spezielle Zustände, von denen diese Pokémon betroffen sind, verlieren ihre Wirkung.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Emerald Blade",
			'fr-fr': "Lame Émeraude",
			'es-es': "Hoja Esmeralda",
			'it-it': "Lamasmeraldo",
			'pt-br': "Lâmina Esmeralda",
			'de-de': "Smaragdgrüne Klinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658825,
				tcgplayer: 272416
			}
		},
	],
}

export default card
