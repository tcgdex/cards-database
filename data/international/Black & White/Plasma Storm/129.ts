import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Scramble Switch",
		'fr-fr': "Échange Combiné",
		'es-es': "Cambio en Desbandada",
		'it-it': "Scambio Pazzo",
		'pt-br': "Chave de Embaralhamento",
		'de-de': "Wechselschalter"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif avec 1 de vos Pokémon de Banc. Ensuite, vous pouvez déplacer autant d’Énergies attachées à l’ancien Pokémon Actif vers le nouveau Pokémon Actif que vous voulez.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. Then, you may move as many Energy attached to the old Active Pokémon to the new Active Pokémon as you like.",
		'es-es': "Cambia a tu Pokémon Activo por 1 de tus Pokémon en Banca. Entonces, puedes mover tantas Energías como quieras del anterior Pokémon Activo al nuevo Pokémon Activo.",
		'it-it': "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina. Poi, puoi spostare tutte le Energie che vuoi dal Pokémon attivo precedente a quello nuovo.",
		'pt-br': "Troque seu Pokémon Ativo por 1 dos Pokémon no seu Banco. Em seguida, você poderá mover tantas Energias ligadas ao antigo Pokémon Ativo para o novo Pokémon Ativo quanto desejar.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Du kannst anschließend beliebig viele der an dein altes Aktives Pokémon angelegten Energien auf dein neues Aktives Pokémon verschieben."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280869,
		tcgplayer: 88990
	}
}

export default card
