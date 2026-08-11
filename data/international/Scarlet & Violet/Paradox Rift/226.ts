import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [720],
	set: Set,

	name: {
		'en-us': "Hoopa ex",
		'fr-fr': "Hoopa-ex",
		'es-es': "Hoopa ex",
		'it-it': "Hoopa-ex",
		'pt-br': "Hoopa ex",
		'de-de': "Hoopa-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie",
			'es-es': "Comprimir Energía",
			'it-it': "Sgretolenergia",
			'pt-br': "Esmagamento de Energia",
			'de-de': "Zermalmende Energie"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Bandit's Fist",
			'fr-fr': "Poing de Bandit",
			'es-es': "Puño Bandido",
			'it-it': "Pugno del Malandrino",
			'pt-br': "Punho Bandido",
			'de-de': "Banditenfaust"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Bandit's Fist.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poing de Bandit.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Puño Bandido.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno del Malandrino.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Punho Bandido.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Banditenfaust nicht einsetzen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740769,
				tcgplayer: 523907,
				cardtrader: 265345
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
