import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Slumbering Forest",
		'fr-fr': "Forêt Sommeillante",
		'es-es': "Bosque Durmiente",
		'it-it': "Foresta Sonnecchiosa",
		'pt-br': "Floresta Sonolenta",
		'de-de': "Schlummerwald"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si un Pokémon est Endormi, son propriétaire lance 2 pièces au lieu d’une pour cet État Spécial entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
		'en-us': "If a Pokémon is Asleep, its owner flips 2 coins instead of 1 for that Special Condition between turns. If either of them is tails, that Pokémon is still Asleep.",
		'es-es': "Si un Pokémon está Dormido, su dueño lanza 2 monedas en vez de 1 por esa Condición Especial entre turnos. Si sale cruz en alguna de ellas, ese Pokémon está todavía Dormido.",
		'it-it': "Se un Pokémon è addormentato, tra un turno e l’altro, il suo proprietario lancia due volte una moneta invece di una per quella condizione speciale. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
		'pt-br': "Se um Pokémon estiver Adormecido, o dono dele jogará 2 moedas ao invés de 1 entre as vezes de jogar. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
		'de-de': "Wenn ein Pokémon schläft, wirft sein Besitzer zwischen den Zügen 2 Münzen anstelle von 1 Münze für jenen Speziellen Zustand. Wenn eine oder beide Münzen Zahl zeigen, schläft jenes Pokémon weiter."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 388822,
		tcgplayer: 195264
	}
}

export default card
