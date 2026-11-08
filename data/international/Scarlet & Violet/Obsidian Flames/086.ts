import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		'fr-fr': "Mentali",
		'en-us': "Espeon",
		'es-es': "Espeon",
		'it-it': "Espeon",
		'pt-br': "Espeon",
		'de-de': "Psiana"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Assaut Psychique",
			'en-us': "Psychic Assault",
			'es-es': "Asalto Psíquico",
			'it-it': "Psicoassalto",
			'pt-br': "Ataque Psíquico",
			'de-de': "Psycho-Ansturm"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Choc Mental",
			'en-us': "Psy Bolt",
			'es-es': "Rayo Psi",
			'it-it': "Psico",
			'pt-br': "Raio Psíquico",
			'de-de': "Mentale Blockade"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 60
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The tip of its forked tail quivers when it is predicting its opponent's next move.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725166,
				tcgplayer: 509848,
				cardtrader: 255771
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 727069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725166,
				tcgplayer: 509848,
				cardtrader: 255771
			}
		},
		{
			type: 'reverse',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 804328
			}
		},
	],

	illustrator: "Cona Nitanda",

	
}

export default card
