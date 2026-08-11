import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Ambition",
				'fr-fr': "Noire Ambition",
				'es-es': "Ambición Siniestra",
				'it-it': "Sinistre Ambizioni",
				'pt-br': "Ambição Sinistra",
				'de-de': "Finsteres Streben"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Basic Pokémon, its Retreat Cost is Colorless more.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, son Coût de Retraite augmente de Colorless.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, su Coste de Retirada es de Colorless más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, il suo costo di ritirata aumenta di Colorless.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, seu custo de Recuo será Colorless a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, erhöhen sich dessen Rückzugskosten um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Seeker",
				'fr-fr': "Chercheur d’Ombres",
				'es-es': "Buscador de Sombras",
				'it-it': "Cercatore Oscuro",
				'pt-br': "Explorador das Sombras",
				'de-de': "Schattensucher"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it's said to bring disaster, in actuality, this Pokémon possesses a calm disposition and warns people of any crises that loom.",
	},

	thirdParty: {
		cardmarket: 369018,
		tcgplayer: 183866
	}
}

export default card
