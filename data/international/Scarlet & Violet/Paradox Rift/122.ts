import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		'en-us': "Lokix",
		'fr-fr': "Gambex",
		'es-es': "Lokix",
		'it-it': "Lokix",
		'pt-br': "Lokix",
		'de-de': "Lextremo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bounce",
			'fr-fr': "Rebond",
			'es-es': "Bote",
			'it-it': "Rimbalzo",
			'pt-br': "Ricochete",
			'de-de': "Sprungfeder"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Punishing Kick",
			'fr-fr': "Coup de Pied Punitif",
			'es-es': "Patada Castigadora",
			'it-it': "Calcio Punitivo",
			'pt-br': "Chute Punitivo",
			'de-de': "Strafender Kick"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740657,
				tcgplayer: 523797,
				cardtrader: 265234
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 786601
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740657,
				tcgplayer: 523797,
				cardtrader: 265234
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
