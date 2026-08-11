import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		'fr-fr': "Viridium V",
		'de-de': "Viridium V",
		'es-es': "Virizion V",
		'pt-br': "Virizion V",
		'it-it': "Virizion V",
		'en-us': "Virizion V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Vent Verdoyant",
			'de-de': "Mahdwind",
			'es-es': "Viento Verde Viento Verdoso",
			'pt-br': "Vento Verdejante",
			'it-it': "Vento Rigoglioso",
			'en-us': "Verdant Wind"
		},

		effect: {
			'fr-fr': "Chacun de vos Pokémon auquel de l'Énergie {G} est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
			'de-de': "Jedes deiner Pokémon, an das {G}-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Spezielle Zustände, von denen diese Pokémon betroffen sind, verlieren ihre Wirkung.)",
			'es-es': "Cada uno de tus Pokémon que tenga cualquier Energía {G} unida a él no puede verse afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon.)",
			'pt-br': "Cada um de seus Pokémon que possuir qualquer Energia {G} ligado a ele não poderá ser afetado por nenhuma Condição Especial. (Remova quaisquer Condições Especiais que estejam afetando estes Pokémon.)",
			'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie {G} assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
			'en-us': "Each of your Pokémon that has any {G} Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Lame Émeraude",
			'de-de': "Smaragdgrüne Klinge",
			'es-es': "Hoja Esmeralda",
			'pt-br': "Lâmina Esmeralda",
			'it-it': "Lamasmeraldo",
			'en-us': "Emerald Blade"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
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

	thirdParty: {
		cardmarket: 669623
	}
}

export default card
