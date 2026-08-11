import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [132],
	set: Set,

	name: {
		'en-us': "Ditto",
		'fr-fr': "Métamorph",
		'es-es': "Ditto",
		'it-it': "Ditto",
		'pt-br': "Ditto",
		'de-de': "Ditto"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sudden Transformation",
			'fr-fr': "Transformation Soudaine",
			'es-es': "Transformación Súbita",
			'it-it': "Trasformazione Improvvisa",
			'pt-br': "Transformação Repentina",
			'de-de': "Plötzliche Transformation"
		},

		effect: {
			'en-us': "This Pokémon can use the attacks of any Basic Pokémon in your discard pile, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes). (You still need the necessary Energy to use each attack.)",
			'fr-fr': "Ce Pokémon peut utiliser les attaques de n'importe quel Pokémon de base dans votre pile de défausse, à l'exception des Pokémon ayant un encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).(Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
			'es-es': "Este Pokémon puede usar los ataques de cualquier Pokémon Básico en tu pila de descartes, excepto de los Pokémon con un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla). (Sigues necesitando la Energía necesaria para usar cada ataque).",
			'it-it': "Questo Pokémon può usare gli attacchi di qualsiasi Pokémon Base nella tua pila degli scarti, a eccezione di quelli che hanno una regola speciale. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
			'pt-br': "Este Pokémon pode usar os ataques de qualquer Pokémon Básico na sua pilha de descarte, exceto por Pokémon que tenham uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras). (Você ainda precisa da Energia necessária para usar cada ataque.)",
			'de-de': "Dieses Pokémon kann die Attacken 1 beliebigen Basis-Pokémon in deinem Ablagestapel, außer Pokémon, die ein Regelfeld haben (Pokémon V, Pokémon-GXusw. haben Regelfelder), einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665275,
				tcgplayer: 276971
			}
		},
	],
}

export default card
