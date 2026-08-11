import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'fr-fr': "Ectoplasma",
		'en-us': "Gengar",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Spectrum",
		'en-us': "Haunter",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Esprit Frappeur",
			'en-us': "Poltergeist",
			'es-es': "Poltergeist",
			'it-it': "Poltergeist",
			'pt-br': "Poltergeist",
			'de-de': "Poltergeist"
		},

		effect: {
			'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
			'en-us': "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
			'pt-br': "Seu oponente revela a mão dele. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Plongée Éthérée",
			'en-us': "Hollow Dive",
			'es-es': "Embestida Hueca",
			'it-it': "Picchiata Vacua",
			'pt-br': "Mergulho Oco",
			'de-de': "Heimsuchendes Tauchen"
		},

		effect: {
			'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			'en-us': "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			'es-es': "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			'it-it': "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733689,
				tcgplayer: 516663,
				cardtrader: 261231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733689,
				tcgplayer: 516663,
				cardtrader: 261231
			}
		},
		{
			type: 'holo',
			foil: 'galaxy',
			thirdParty: {
				cardmarket: 861151
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
