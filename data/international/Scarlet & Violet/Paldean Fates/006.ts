import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		'en-us': "Espathra ex",
		'fr-fr': "Cléopsytra-ex",
		'es-es': "Espathra ex",
		'it-it': "Espathra-ex",
		'pt-br': "Espathra ex",
		'de-de': "Psiopatra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dazzling Gaze",
			'fr-fr': "Regard Éblouissant",
			'es-es': "Mirada Deslumbrante",
			'it-it': "Sguardo Accecante",
			'pt-br': "Olhar Deslumbrante",
			'de-de': "Überwältigender Blick"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost {C} more.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent {C} de plus.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival cuestan {C} más.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi usati dal Pokémon attivo del tuo avversario aumenta di {C}.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente custarão {C} a mais.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der vom Aktiven Pokémon deines Gegners eingesetzten Attacken um {C}."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psy Ball",
			'fr-fr': "Balle Psy",
			'es-es': "Bola Psi",
			'it-it': "Psicopalla",
			'pt-br': "Bola Psíquica",
			'de-de': "Psyball"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to both Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée aux deux Pokémon Actifs.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida a ambos Pokémon Activos.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada a ambos os Pokémon Ativos.",
			'de-de': "Diese Attacke fügt für jede an beide Aktiven Pokémon angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751532,
				tcgplayer: 534140,
				cardtrader: 274190
			}
		},
	],

	suffix: "ex",
	illustrator: "takuyoa",

	
}

export default card
