import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'en-us': "Flareon",
		'pt-br': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara",
		'es-es': "Flareon",
		'it-it': "Flareon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				'en-us': "Destructive Flame",
				'pt-br': "Chama Destruidora",
				'fr-fr': "Flamme Destructrice",
				'de-de': "Verzehrende Flamme",
				'es-es': "Llama Destructiva",
				'it-it': "Devastofiamma"
			},

			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario."
			},

			damage: 30
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],

			name: {
				'en-us': "Fighting Blaze",
				'pt-br': "Luta Labareda",
				'fr-fr': "Brasier Combatif",
				'de-de': "Feuerfäuste",
				'es-es': "Llamarada Luchadora",
				'it-it': "Fiammata Combattente"
			},

			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più."
			},

			damage: "90+"
		}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "SIE NANAHARA",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 805364,
				tcgplayer: 611826
			},
		}
	],
}

export default card
