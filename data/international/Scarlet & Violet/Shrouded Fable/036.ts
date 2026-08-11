import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [1014],
	set: Set,

	name: {
		'en-us': "Okidogi ex",
		'fr-fr': "Félicanis-ex",
		'es-es': "Okidogi ex",
		'it-it': "Okidogi-ex",
		'pt-br': "Okidogi ex",
		'de-de': "Boninu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Poisonous Musculature",
			'fr-fr': "Musculature Empoisonnée",
			'es-es': "Musculatura Venenosa",
			'it-it': "Muscolatura Velenosa",
			'pt-br': "Sarado e Tóxico",
			'de-de': "Giftige Muskulatur"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {D} Energy cards and attach them to this Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, this Pokémon is now Poisoned.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {D} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, ce Pokémon est maintenant Empoisonné.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {D} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja. Si has unido Energía a un Pokémon de esta manera, este Pokémon pasa a estar Envenenado.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {D} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo. Se hai assegnato dell'Energia a un Pokémon in questo modo, questo Pokémon viene avvelenato.",
			'pt-br': "Procure por até 2 cartas de Energia {D} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho. Se você ligou Energia a um Pokémon desta forma, este Pokémon agora estará Envenenado.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{D}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, ist dieses Pokémon jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Chain-Crazed",
			'fr-fr': "Chaînes en Folie",
			'es-es': "Cadena Enloquecida",
			'it-it': "Catenamatta",
			'pt-br': "Corrente Colérica",
			'de-de': "Ketten des Wahnsinns"
		},

		effect: {
			'en-us': "If this Pokémon is Poisoned, this attack does 130 more damage.",
			'fr-fr': "Si ce Pokémon est Empoisonné, cette attaque inflige 130 dégâts supplémentaires.",
			'es-es': "Si este Pokémon está Envenenado, este ataque hace 130 puntos de daño más.",
			'it-it': "Se questo Pokémon è avvelenato, questo attacco infligge 130 danni in più.",
			'pt-br': "Se este Pokémon estiver Envenenado, este ataque causará 130 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon vergiftet ist, fügt diese Attacke 130 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",


	suffix: "ex",
	illustrator: "takuyoa",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780931,
				tcgplayer: 560346
			}
		},
	],
}

export default card
