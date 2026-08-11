import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'fr-fr': "Ponyta de Galar",
		'en-us': "Galarian Ponyta",
		'es-es': "Ponyta de Galar",
		'it-it': "Ponyta di Galar",
		'pt-br': "Ponyta de Galar",
		'de-de': "Galar-Ponita"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
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
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "This Pokémon will look into your eyes and read the contents of your heart. If it finds evil there, it promptly hides away."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539618,
				tcgplayer: 232408
			}
		},
	],
}

export default card
