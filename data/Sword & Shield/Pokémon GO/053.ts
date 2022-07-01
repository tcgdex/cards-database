import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto",
		fr: "Métamorph",
		es: "Ditto",
		it: "Ditto",
		pt: "Ditto",
		de: "Ditto"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sudden Transformation",
			fr: "Transformation Soudaine",
			es: "Transformación Súbita",
			it: "Trasformazione Improvvisa",
			pt: "Transformação Repentina",
			de: "Plötzliche Transformation"
		},

		effect: {
			en: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes). (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n'importe quel Pokémon de base dans votre pile de défausse, à l'exception des Pokémon ayant un encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).(Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
			es: "Este Pokémon puede usar los ataques de cualquier Pokémon Básico en tu pila de descartes, excepto de los Pokémon con un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla). (Sigues necesitando la Energía necesaria para usar cada ataque).",
			it: "Questo Pokémon può usare gli attacchi di qualsiasi Pokémon Base nella tua pila degli scarti, a eccezione di quelli che hanno una regola speciale. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali. Devi comunque avere l'Energia necessaria per usare quegli attacchi.",
			pt: "Este Pokémon pode usar os ataques de qualquer Pokémon Básico na sua pilha de descarte, exceto por Pokémon que tenham uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras). (Você ainda precisa da Energia necessária para usar cada ataque.)",
			de: "Dieses Pokémon kann die Attacken 1 beliebigen Basis-Pokémon in deinem Ablagestapel, außer Pokémon, die ein Regelfeld haben (Pokémon V, Pokémon-GXusw. haben Regelfelder), einsetzen. (Du benötigst jedoch die jeweils für die Attacke notwendige Energie.)"
		}
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card