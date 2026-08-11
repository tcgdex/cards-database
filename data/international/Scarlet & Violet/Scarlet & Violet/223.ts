import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [918],
	set: Set,

	name: {
		'en-us': "Spidops ex",
		'fr-fr': "Filentrappe-ex",
		'es-es': "Spidops ex",
		'it-it': "Spidops-ex",
		'pt-br': "Spidops ex",
		'de-de': "Spinsidias-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Tarountula",
		'fr-fr': "Tissenboule"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Trap Territory",
			'fr-fr': "Territoire Piégé",
			'es-es': "Territorio Trampa",
			'it-it': "Territorio Trappola",
			'pt-br': "Armadilha Territorial",
			'de-de': "Fallenrevier"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon's Retreat Cost is {C} more.",
			'fr-fr': "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de {C}.",
			'es-es': "El Coste de Retirada del Pokémon Activo de tu rival es de {C} más.",
			'it-it': "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di {C}.",
			'pt-br': "O custo de Recuo do Pokémon Ativo do seu oponente é {C} a mais.",
			'de-de': "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um {C}."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Wire Hang",
			'fr-fr': "Attache Filaire",
			'es-es': "Colgar de un Hilo",
			'it-it': "Filoappiglio",
			'pt-br': "Por Um Fio",
			'de-de': "Drahthänger"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "takuyoa",

	description: {
		'en-us': "No matter how much it stuffs its belly with food, it is always anxious about getting hungry again. So, it stashes berries in its cheeks and tail.",
	},

	thirdParty: {
        cardmarket: 702519,
        tcgplayer: 490081
    }
}

export default card