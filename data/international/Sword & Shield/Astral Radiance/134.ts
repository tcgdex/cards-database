import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [899],
	set: Set,

	name: {
		'en-us': "Wyrdeer V",
		'fr-fr': "Cerbyllin V",
		'es-es': "Wyrdeer V",
		'it-it': "Wyrdeer V",
		'pt-br': "Wyrdeer V",
		'de-de': "Damythir V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Frontier Road",
			'fr-fr': "Route Frontalière",
			'es-es': "Camino Fronterizo",
			'it-it': "Strada di Frontiera",
			'pt-br': "Estrada Fronteiriça",
			'de-de': "Vorreiter"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Energy from your other Pokémon to it.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies que vous le voulez de vos autres Pokémon vers celui-ci.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie dai tuoi altri Pokémon su questo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia dos seus outros Pokémon para este Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Psyshield Bash",
			'fr-fr': "Sprint Bouclier",
			'es-es': "Asalto Barrera",
			'it-it': "Barrierassalto",
			'pt-br': "Pancada de Escudo Psíquico",
			'de-de': "Barrierenstoß"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658795,
				tcgplayer: 272377
			}
		},
	],
}

export default card
