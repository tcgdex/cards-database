import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
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
				en: "Dark Ambition",
				fr: "Noire Ambition",
				es: "Ambición Siniestra",
				it: "Sinistre Ambizioni",
				pt: "Ambição Sinistra",
				de: "Finsteres Streben"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, its Retreat Cost is Colorless more.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, son Coût de Retraite augmente de Colorless.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, su Coste de Retirada es de Colorless más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, il suo costo di ritirata aumenta di Colorless.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, seu custo de Recuo será Colorless a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, erhöhen sich dessen Rückzugskosten um Colorless."
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
				en: "Shadow Seeker",
				fr: "Chercheur d’Ombres",
				es: "Buscador de Sombras",
				it: "Cercatore Oscuro",
				pt: "Explorador das Sombras",
				de: "Schattensucher"
			},
			effect: {
				en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
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

	thirdParty: {
		cardmarket: 369018,
		tcgplayer: 183866
	}
}

export default card
