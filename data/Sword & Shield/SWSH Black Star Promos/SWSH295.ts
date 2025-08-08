import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		fr: "Viridium V",
		de: "Viridium V",
		es: "Virizion V",
		pt: "Virizion V",
		it: "Virizion V",
		en: "Virizion V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Vent Verdoyant",
			de: "Mahdwind",
			es: "Viento Verde Viento Verdoso",
			pt: "Vento Verdejante",
			it: "Vento Rigoglioso",
			en: "Verdant Wind"
		},

		effect: {
			fr: "Chacun de vos Pokémon auquel de l'Énergie {G} est attachée ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant les Pokémon concernés.)",
			de: "Jedes deiner Pokémon, an das {G}-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. (Spezielle Zustände, von denen diese Pokémon betroffen sind, verlieren ihre Wirkung.)",
			es: "Cada uno de tus Pokémon que tenga cualquier Energía {G} unida a él no puede verse afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a esos Pokémon.)",
			pt: "Cada um de seus Pokémon que possuir qualquer Energia {G} ligado a ele não poderá ser afetado por nenhuma Condição Especial. (Remova quaisquer Condições Especiais que estejam afetando estes Pokémon.)",
			it: "Nessuno dei tuoi Pokémon che ha delle Energie {G} assegnate può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano tali Pokémon).",
			en: "Each of your Pokémon that has any {G} Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Lame Émeraude",
			de: "Smaragdgrüne Klinge",
			es: "Hoja Esmeralda",
			pt: "Lâmina Esmeralda",
			it: "Lamasmeraldo",
			en: "Emerald Blade"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card