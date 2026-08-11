import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hypnotic Pendulum",
				'fr-fr': "Pendule Hypnotique",
				'es-es': "Péndulo Hipnótico",
				'it-it': "Pendolo Ipnotico",
				'pt-br': "Pêndulo Hipnótico",
				'de-de': "Hypnotisches Pendel"
			},
			effect: {
				'en-us': "When your opponent’s Active Pokémon is Knocked Out, flip a coin. If heads, choose which of your opponent’s Benched Pokémon becomes their new Active Pokémon.",
				'fr-fr': "Lorsque le Pokémon Actif de votre adversaire est mis K.O., lancez une pièce. Si c’est face, choisissez le Pokémon de Banc de votre adversaire qui deviendra son nouveau Pokémon Actif.",
				'es-es': "Cuando el Pokémon Activo de tu rival quede Fuera de Combate, lanza 1 moneda. Si sale cara, elige cuál de los Pokémon en Banca de tu rival pasa a ser su nuevo Pokémon Activo.",
				'it-it': "Quando il Pokémon attivo del tuo avversario viene messo KO, lancia una moneta. Se esce testa, scegli quale dei Pokémon in panchina del tuo avversario far diventare il suo nuovo Pokémon attivo.",
				'pt-br': "Quando o Pokémon Ativo do seu oponente for Nocauteado, jogue 1 moeda. Se sair cara, escolha qual dos Pokémon no Banco do seu oponente se tornará o novo Pokémon Ativo dele(a).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners kampfunfähig wird, wirf 1 Münze. Wähle bei Kopf, welches der Pokémon auf der Bank deines Gegners sein neues Aktives Pokémon wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stir the Brain",
				'fr-fr': "Remue-Méninges",
				'es-es': "Mareo Cerebral",
				'it-it': "Strizzacervelli",
				'pt-br': "Bagunça Cerebral",
				'de-de': "Gedankenreiz"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each card in your opponent’s hand.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada carta en la mano de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni carta nella mano del tuo avversario.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada carta na mão do seu oponente.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Karten auf der Hand deines Gegners zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "In Alola, Komala is Hypno's main target. It rarely harms people.",
	},

	thirdParty: {
		cardmarket: 372360,
		tcgplayer: 189172
	}
}

export default card
