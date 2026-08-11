import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'es-es': "Lugia",
		'it-it': "Lugia",
		'pt-br': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pressure",
				'fr-fr': "Pression",
				'es-es': "Presión",
				'it-it': "Pressione",
				'pt-br': "Pressão",
				'de-de': "Druck"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, any damage done by attacks from your opponent's Active Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés par des attaques du Pokémon Actif de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido por ataques del Pokémon Activo de tu rival se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti dagli attacchi del Pokémon attivo del tuo avversario sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado por ataques do Pokémon Ativo do seu oponente, será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der durch Angriffe des Aktiven Pokémon deines Gegners zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Intensifying Burn",
				'fr-fr': "Rage Brûlante",
				'es-es': "Intensa Quemadura",
				'it-it': "Scottatanto",
				'pt-br': "Queimadura Intensificante",
				'de-de': "Brandverstärker"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.",
	},

	thirdParty: {
		cardmarket: 289899,
		tcgplayer: 117853
	}
}

export default card
