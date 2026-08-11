import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'fr-fr': "Darumarond de Galar",
		'en-us': "Galarian Darumaka",
		'es-es': "Darumaka de Galar",
		'it-it': "Darumaka di Galar",
		'pt-br': "Darumaka de Galar",
		'de-de': "Galar-Flampion"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Poing Glace",
			'en-us': "Ice Punch",
			'es-es': "Puño Hielo",
			'it-it': "Gelopugno",
			'pt-br': "Soco de Gelo",
			'de-de': "Eishieb"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It lived in snowy areas for so long that its fire sac cooled off and atrophied. It now has an organ that generates cold instead."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539503,
				tcgplayer: 232373
			}
		},
	],
}

export default card
