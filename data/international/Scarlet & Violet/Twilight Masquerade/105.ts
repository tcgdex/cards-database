import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'es-es': "Conkeldurr",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'de-de': "Meistagrif"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Tantrum",
			'fr-fr': "Mauvaise Humeur",
			'es-es': "Rabieta",
			'it-it': "Collera",
			'pt-br': "Petulância",
			'de-de': "Rappel"
		},

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 80
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Gutsy Swing",
			'fr-fr': "Coup Courageux",
			'es-es': "Golpe con Agallas",
			'it-it': "Baldocolpo",
			'pt-br': "Balanço Destemido",
			'de-de': "Mutiger Schwung"
		},

		effect: {
			'en-us': "If this Pokémon is affected by a Special Condition, ignore all Energy in this attack's cost.",
			'fr-fr': "Si ce Pokémon est affecté par un État Spécial, ignorez toutes les Énergies dans le coût de cette attaque.",
			'es-es': "Si este Pokémon se ve afectado por una Condición Especial, ignora todas las Energías en el coste de este ataque.",
			'it-it': "Se questo Pokémon è influenzato da una condizione speciale, ignora tutte le Energie necessarie per usare questo attacco.",
			'pt-br': "Se este Pokémon estiver afetado por uma Condição Especial, ignore todas as Energias no custo deste ataque.",
			'de-de': "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, ignoriere alle Energien in den Kosten dieser Attacke."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Rather than rely on their strength, they master moves that make good use of centrifugal force to swing around concrete.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769279,
				tcgplayer: 550149
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769279,
				tcgplayer: 550149
			}
		},
	],

	illustrator: "Takeshi Nakamura",

}

export default card