import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'fr-fr': "Pyroli",
		'en-us': "Flareon",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
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
		cost: ["Fire"],

		name: {
			'fr-fr': "Flamme Destructrice",
			'en-us': "Destructive Flame",
			'es-es': "Llama Destructiva",
			'it-it': "Devastofiamma",
			'pt-br': "Chama Destruidora",
			'de-de': "Verzehrende Flamme"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Brasier Combatif",
			'en-us': "Fighting Blaze",
			'es-es': "Llamarada Luchadora",
			'it-it': "Fiammata Combattente",
			'pt-br': "Luta Labareda",
			'de-de': "Feuerfäuste"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733731,
				tcgplayer: 516699,
				cardtrader: 261230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733731,
				tcgplayer: 516699,
				cardtrader: 261230
			}
		},
	],

	illustrator: "Ryota Murayama",

	
}

export default card
