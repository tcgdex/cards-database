import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [992],
	set: Set,

	name: {
		'en-us': "Iron Hands",
		'fr-fr': "Paume-de-Fer",
		'es-es': "Ferropalmas",
		'it-it': "Manoferrea",
		'pt-br': "Mãos Férreas",
		'de-de': "Eisenhand"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Volt Wave",
			'fr-fr': "Vague Survoltée",
			'es-es': "Onda Electrificante",
			'it-it': "Onda Volt",
			'pt-br': "Onda de Volts",
			'de-de': "Voltwelle"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Superalloy Hands",
			'fr-fr': "Mains Superalliage",
			'es-es': "Palmas de Superaleación",
			'it-it': "Mani Supermetalliche",
			'pt-br': "Mãos Supermetálicas",
			'de-de': "Superlegierte Hände"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon shares many similarities with Iron Hands, an object mentioned in a certain expedition journal.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760691,
				tcgplayer: 542805
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760691,
				tcgplayer: 542805
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card