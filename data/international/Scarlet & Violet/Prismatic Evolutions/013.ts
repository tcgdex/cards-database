import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'pt-br': "Flareon",
		'it-it': "Flareon",
		'de-de': "Flamara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Destructive Flame",
			'fr-fr': "Flamme Destructrice",
			'es-es': "Llama Destructiva",
			'pt-br': "Chama Destruidora",
			'it-it': "Devastofiamma",
			'de-de': "Verzehrende Flamme"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Fighting Blaze",
			'fr-fr': "Brasier Combatif",
			'es-es': "Llamarada Luchadora",
			'pt-br': "Luta Labareda",
			'it-it': "Fiammata Combattente",
			'de-de': "Feuerfäuste"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
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

	illustrator: "Ryota Murayama",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805402,
				tcgplayer: 610368
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805402,
				tcgplayer: 610368
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806426,
				tcgplayer: 610545
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806427,
				tcgplayer: 610646
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858729,
			}
		},
	],
}

export default card
